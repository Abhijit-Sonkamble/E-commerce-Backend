//Status code import Messages import kele
const statusCode = require("http-status-codes");
const { errorRes, successRes } = require("../../utils/response");
const { MSG } = require("../../utils/msg");
const moment = require('moment');

//Import Service
const CategoryService = require("../../services/category/category.service")
const categoryService = new CategoryService()

//Add Category
module.exports.addCategory = async(req, res) => {
    try {

          if (req.user) {
                return res.status(statusCode.UNAUTHORIZED).json(successRes(statusCode.UNAUTHORIZED, true, MSG.UNAUTHORIZED));
              }

         req.body.create_at = moment().format('DD/MM/YYYY, h:mm:ss a');
        req.body.update_at = moment().format('DD/MM/YYYY, h:mm:ss a');

        const category = await categoryService.addCategory(req.body)

         if (!category) {
                    console.log("Category Not Added : "); 
                    return res.status(statusCode.BAD_REQUEST).json(errorRes(statusCode.BAD_REQUEST, true, MSG.CATEGORY_CREATED_FAILED)); 
                } 
        
                return res.status(statusCode.CREATED).json(successRes(statusCode.CREATED, false, MSG.CATEGORY_CREATED, category));

    } catch (error) {
        return res.status(statusCode.INTERNAL_SERVER_ERROR).json(errorRes(statusCode.INTERNAL_SERVER_ERROR, true, MSG.SERVER_ERROR));
    }
}