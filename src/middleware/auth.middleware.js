const jwt =  require("jsonwebtoken");
const statusCode = require("http-status-codes");
const { errorRes } = require("../utils/response");
const { MSG } = require("../utils/msg");
const AdminAuthService = require("../services/auth/admin/admin.service");//Admin Active aahe ki nahi ki deleted aahe he baghnya sathi aapn ithe AuthService gheun yeto
const adminServiceAuth = new AdminAuthService(); // Aani aapn ithe tyache object banvle

module.exports = async (req, res, next) => {

    let token = req.headers.authorization;  //ya variable madhe ase aahe ki aapn he req send keli tr ti postman cha headers madhe jaun authorization madhun send kelele token ithe store hoil
   

   if (!token) {
    return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.TOKEN_INVALID));
   }

   token = token.slice(7, token.length)

   try {
    const decoded =  jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded.adminId)

   const admin =  await adminServiceAuth.fetchSingleAdmin({_id: decoded.adminId})

   if (!admin) {
   next();
   }

   } catch (error) {
    console.log("error in middleware : ", error)
    return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.UNAUTHORIZED));
   }

}