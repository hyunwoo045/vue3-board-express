var express = require("express");
var mysql = require("mysql");
var url = require("url");
var router = express.Router();

router.get("/", (req, res) => {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "111111",
    database: "tutorial",
  });
  connection.connect();

  let _url = req.url;
  let queryData = url.parse(_url, true).query;
  console.log(queryData.id);

  if (queryData.id === undefined) {
    connection.query("SELECT * FROM topic", function (err, topic) {
      if (err) {
        throw err;
      }
      res.send(topic);
    });
  } else {
    connection.query(
      `SELECT * FROM topic WHERE id=?`,
      [queryData.id],
      function (err, topic) {
        if (err) {
          throw err;
        }
        res.send(topic);
      }
    );
  }
});

module.exports = router;
