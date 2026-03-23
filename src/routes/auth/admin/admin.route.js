const express = require("express");
const { registerAdmin, loginAdmin, fetchAllAdmin, fetchSingleAdmin, forgotPassword,  } = require("../../../controllers/auth/admin/admin.controller");
const auth = require("../../../middleware/auth.middleware")
const adminRoute = express.Router();

//Register Admin
adminRoute.post("/registerAdmin" , registerAdmin);

//Login Admin
adminRoute.post("/loginAdmin", loginAdmin);

//Forgot Paaword
adminRoute.post("/forgotPassword" , forgotPassword)

adminRoute.get("/", fetchAllAdmin )


adminRoute.get("/:id" ,auth, fetchSingleAdmin) 

module.exports = adminRoute; 