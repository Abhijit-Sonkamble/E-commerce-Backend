const express = require("express");
const { addCategory, fetchCategory, updateCategory, deleteCategory } = require("../../controllers/category/category.controller");
const { upload } = require("../../middleware/storage.middleware");

const categoryRoute = express.Router()

//Add Category
categoryRoute.post("/", upload.single("category_image"), addCategory);

//fetch Category
categoryRoute.get("/", fetchCategory)

//Update Category
categoryRoute.patch("/", updateCategory)

//Delete Category
categoryRoute.delete("/", deleteCategory)

module.exports = categoryRoute; 