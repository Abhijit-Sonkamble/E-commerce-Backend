const express = require("express");

const userRoute = express.Router();

// const auth = require("../../../middleware/auth.middleware");
const { registerUser, loginUser, forgotPassword, verifyOTP, newPassword, fetchAllUser, deleteUser, updateUser, activeOrInactiveUser, userProfile, change_password } = require("../../../controllers/auth/user/user.controller");

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

//REST API

//Fetch All User
userRoute.get("/", fetchAllUser)

//Delete User
userRoute.delete("/" , deleteUser)

//Update User
userRoute.patch("/", updateUser)

//Active or Inactive
userRoute.put("/", activeOrInactiveUser)

userRoute.get("/userProfile", userProfile)

//Change Password
userRoute.post("/change-password", change_password)


module.exports = userRoute;