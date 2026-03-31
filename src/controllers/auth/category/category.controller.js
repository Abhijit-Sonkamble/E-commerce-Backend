//Status code import
const statusCode = require("http-status-codes");

//Add Category
module.exports.addCategory = (req, res) => {
    try {
        
    } catch (error) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(errorRes(statusCode.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
    }
}