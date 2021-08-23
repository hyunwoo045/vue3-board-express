var express = require("express");
var mysql = require("mysql");
var router = express.Router();

router.post("/", function (req, res) {
  let id = req.body.id;
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
  if (id === "-1") {
    connection.query(
      `INSERT INTO topic (title, description, created, author_id) VALUES(?, ?, NOW(), ?)`,
      [title, description, author_id],
      (err) => {
        if (err) throw err;
        res.send("Create Success!");
      }
    );
  } else {
    connection.query(
      `UPDATE topic SET title=?, description=?, author_id=? WHERE id=${id}`,
      [title, description, author_id],
      (err) => {
        if (err) throw err;
        res.send("Update Success!");
      }
    );
  }
});

module.exports = router;
