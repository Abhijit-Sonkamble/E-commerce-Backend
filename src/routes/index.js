const express = require("express");
const route = express.Router();

//Auth routes
route.use("/auth", require("../routes/auth/auth.route"));

//Admin cha route fetch hoyla pahije mhanun auth chi condition nahi jayla pahije mhanun ekda ch
route.use("/admin", require("./auth/admin/admin.route"))

module.exports = route;