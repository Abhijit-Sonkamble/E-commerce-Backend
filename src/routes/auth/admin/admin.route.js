const express = require("express");
const { registerAdmin, loginAdmin, fetchAllAdmin, fetchSingleAdmin, forgotPassword, verifyOTP, newPassword,  } = require("../../../controllers/auth/admin/admin.controller");
const auth = require("../../../middleware/auth.middleware")
const adminRoute = express.Router();

//Register Admin
adminRoute.post("/registerAdmin" , registerAdmin);

//Login Admin
adminRoute.post("/loginAdmin", loginAdmin);

//Forgot Paaword
adminRoute.post("/forgotPassword" , forgotPassword)

//Verify OTP
adminRoute.post("/verifyOTP", verifyOTP)

//Forget new password
adminRoute.post("/newPassword", newPassword)

adminRoute.get("/", fetchAllAdmin )


adminRoute.get("/:id" ,auth, fetchSingleAdmin) 

module.exports = adminRoute; 