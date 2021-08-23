var express = require("express");
var url = require("url");
// var mysql = require("mysql");
var router = express.Router();

router.get("/", function (req, res, next) {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  console.log(queryData.id);

  res.send("Create response");
});

module.exports = router;
