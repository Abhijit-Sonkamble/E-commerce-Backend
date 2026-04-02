const express = require("express");
const { addCategory } = require("../../controllers/category/category.controller");

const categoryRoute = express.Router()

//Add Category
categoryRoute.post("/", addCategory)

module.exports = categoryRoute;