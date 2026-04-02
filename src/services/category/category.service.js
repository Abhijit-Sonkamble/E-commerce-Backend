const category = require("../../model/category.model")

module.exports = class CategoryService {
    async addCategory (body) {
        try {
        return await category.create(body)
        } catch (error) {
            console.log("Error in service addCategory : ", error)
        }
    }
}
