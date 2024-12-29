const express = require("express");
const adminUser = require("./user.controller");


const router = express.Router();

router.post("/admin", adminUser);

module.exports = router;
