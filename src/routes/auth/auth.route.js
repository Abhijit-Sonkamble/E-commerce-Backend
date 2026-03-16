const express = require("express");
const auth = express.Router();

auth.use("/admin", require("./admin/admin.route"))

module.exports = auth;