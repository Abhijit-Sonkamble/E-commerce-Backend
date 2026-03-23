const AdminAuthService = require("../../../services/auth/admin/admin.service");
const { MSG } = require("../../../utils/msg");
const { errorRes, successRes } = require("../../../utils/response"); // Utils madhun ithe import kele bcoz error and success cha response aala tr kay disle pahije
const moment = require('moment');

//Password Hash and encrypt sathi
const bcrypt = require ("bcrypt");

//JWT import
const jwt = require("jsonwebtoken");

//Status code import
const statusCode = require("http-status-codes");
const { sendOTPMail, sendRegisterAdminMail } = require("../../../utils/mailer");


//Yat aapn AdminAuthService he require kele tyamule services madhle sagle ikde use karu shakto
const adminServiceAuth = new AdminAuthService(); //yat new he keyword object banvala use hote purn js madhe


//Register Admin
module.exports.registerAdmin = async(req, res)=>{
     try {

        const admin = await adminServiceAuth.fetchSingleAdmin({email : req.body.email});

        if (admin) {
        return res.status(statusCode.BAD_REQUEST).json(successRes(statusCode.BAD_REQUEST, true, MSG.ADMIN_ALREADY_EXISTS));
        }

        //Password la bcrypt karte he req.body madhun password gheil and tyatun bcrypt karel
      req.body.password =   await bcrypt.hash(req.body.password, 12)

        req.body.create_at = moment().format('DD/MM/YYYY, h:mm:ss a');
        req.body.update_at = moment().format('DD/MM/YYYY, h:mm:ss a');

        const newAdmin = await adminServiceAuth.registerAdmin(req.body); //Yachya madhe adminServiceAuth ithun gheil and registerAdmin madhe takel req.body madhe
        if (!newAdmin) {
            console.log("Admin Not Added : "); 
            return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.ADMIN_REGISTRATION_FAILED)); 
        } 

        await sendRegisterAdminMail(req.body.email, password);

        return res.status(statusCode.CREATED).json(successRes(statusCode.CREATED, false, MSG.ADMIN_REGISTRATION_SUCCESS, newAdmin)); //ithe aapn newAdmin pass kela tyamule aapn data fetch karu shakto postman madhe and console madhe
     } catch (err) {
        console.log("Error : ",err)
     }
}

//Login Admin
module.exports.loginAdmin = async(req, res) => {

   try {
      const admin = await adminServiceAuth.fetchSingleAdmin({email: req.body.email});

      if (!admin) {
        return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.ADMIN_NOT_FOUND));
        }

     const isPassword = await bcrypt.compare(req.body.password, admin.password); // ithe compare madhe compare(jithun password yetoy, encrypt password kuthun yetoy te);

     if (!isPassword) {
        return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.INVALID_CREDENTIALS));
     }


     //JWT logic
     const payload = {
      adminId : admin.id
     }

     const token = jwt.sign(payload, process.env.SECRET_KEY );


        return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.ADMIN_LOGIN_SUCCESS, {token})); //ithe aapn newAdmin pass kela tyamule aapn data fetch karu shakto postman madhe and console madhe
   } catch (err) {
       console.log("Error : ", err)
   }

}

//Forgot Password
module.exports.forgotPassword = async (req, res) => {
  try {
    console.log(req.body);

    const admin = await adminServiceAuth.fetchSingleAdmin({ email: req.body.email });

    if (!admin) {
             return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.ADMIN_NOT_FOUND));
    }

    const OTP = Math.floor(100000 + Math.random() * 900000);

    console.log("OTP : ", OTP);

    sendOTPMail(req.body.email, OTP);

    const expireOTPTime = new Date(Date.now() + 1000 * 60 * 2);

    return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.OTP_SENT_SUCCESS)
    );

  } catch (err) {
    console.log("Error in forgot : ", err);
  }
};

//fetch all admin
module.exports.fetchAllAdmin = async(req, res)=>{
     try {
      const allAdmin = await adminServiceAuth.fetchAllAdmin();

       return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.ADMIN_FETCH_SUCCESS , allAdmin)); 
     } catch (err) {
        console.log("Error in fetchAll : ",err)
     }
}

//Fetch Single Admin
module.exports.fetchSingleAdmin = async(req, res)=>{
     try {
        const { id } = req.params;
const admin = await adminServiceAuth.fetchSingleAdmin({_id:id});
         if (!admin) {
        return res.status(statusCode.BAD_REQUEST).json(successRes(statusCode.BAD_REQUEST, true, MSG.ADMIN_NOT_FOUND));
         }

       return res.status(statusCode.OK).json(successRes(statusCode.OK, false, MSG.ADMIN_FETCH_SUCCESS , admin)); 
     } catch (err) {
        console.log("Error in single Admin : ",err)
     }
}