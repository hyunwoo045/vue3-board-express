var express = require("express");
var mysql = require("mysql");
var router = express.Router();
let data = [];
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hwoo045rla",
  database: "tutorial",
});

connection.connect();
connection.query("SELECT * FROM topic", function (err, res, fields) {
  if (err) {
    console.log(err);
  }
  data = res;
});

router.get("/", function (req, res, next) {
  res.send(data);
});

module.exports = router;
