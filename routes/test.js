var express = require("express");
var router = express.Router();
var data = require("../fortest.json");

router.get("/", function (req, res, next) {
  res.send(data);
});

module.exports = router;
