const express = require("express");

const userRoute = express.Router();

// const auth = require("../../../middleware/auth.middleware");
const { registerUser, loginUser, forgotPassword, verifyOTP, newPassword } = require("../../../controllers/auth/user/user.controller");

//Register User
userRoute.post("/registerUser" , registerUser);

// //Login User
userRoute.post("/loginUser", loginUser);

//Forgot Paaword
userRoute.post("/forgotPassword" , forgotPassword)

// //Verify OTP
userRoute.post("/verifyOTP", verifyOTP)

// //Forget new password
userRoute.post("/newPassword", newPassword)


module.exports = userRoute;