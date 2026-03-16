const Admin = require("../../../model/admin.model");

module.exports = class AdminAuthService {
    //Class chya aat function key word nahi yet tyamule registerAdmin mage nahi dile
    async registerAdmin(body) {

        try {
            return await Admin.create(body); // .create hi asynchromous method aahe tyamle ithe async/await dile
        } catch (error) {
            console.log("Admin Service error : ", error)
        }

    }

    //Fetch admin karala
    async fetchSingleAdmin(body){
        try {
            return await Admin.findOne(body)
        } catch (error) {
            console.log("Admin Not Fetched....!");
        }
    }

    //Fetch All Admin
    async fetchAllAdmin(){
        try {
            return await Admin.find()
        } catch (error) {
            console.log("Admin Not Fetched....!");
        }
    }


}