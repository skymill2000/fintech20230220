const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("사용자의 요청이 발생했습니다.");
  res.send("Hello World");
});

app.listen(4000);
