var express = require("express");
var mysql = require("mysql");
var router = express.Router();

router.post("/", function (req, res) {
  let title = req.body.title;
  let description = req.body.description;
  let author_id = 1;

  let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "111111",
    database: "tutorial",
  });
  connection.connect();

  connection.query(
    `INSERT INTO topic (title, description, created, author_id) VALUES(?, ?, NOW(), ?)`,
    [title, description, author_id],
    (err) => {
      if (err) throw err;
      console.log("INSERTED SUCCESSFULLY");
      res.send("Create Success!");
    }
  );
});

module.exports = router;
