const express = require("express");
const { createDemoOrder } = require("../controllers/demoController");

const router = express.Router();

router.route("/demoorder/create").post(createDemoOrder);


module.exports = router;