const express = require("express");
const { registerAdmin, loginAdmin, fetchAllAdmin,  } = require("../../../controllers/auth/admin/admin.controller");
const adminRoute = express.Router();

//Register Admin
adminRoute.post("/registerAdmin" , registerAdmin);

//Login Admin
adminRoute.post("/loginAdmin", loginAdmin);

adminRoute.get("/", fetchAllAdmin )

module.exports = adminRoute; 