const User = require("../../../model/user.model");

module.exports = class UserAuthService {
    //Class chya aat function key word nahi yet tyamule registerAdmin mage nahi dile
    async registerUser(body) {

        try {
            return await User.create(body); // .create hi asynchromous method aahe tyamle ithe async/await dile
        } catch (error) {
            console.log("User Service error : ", error)
        }

    }

    //Fetch admin karala
    async fetchSingleUser(body){
        try {
            return await User.findOne(body)
        } catch (error) {
            console.log("User Not Fetched....!");
        }
    }

    //Fetch All Admin
    async fetchAllUser(){
        try {
            return await User.find()
        } catch (error) {
            console.log("User Not Fetched....!");
        }
    }

    //OTP
    async updateUser(id, body){
        try {
            return await User.findByIdAndUpdate(id, body, {new : true}); //{new true mhanje ki updated data yeil and te return karto}
        } catch (error) {
            console.log("User Not Fetched....!");
        }
    }


}