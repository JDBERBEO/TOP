const express = require("express");
const app = express();

console.log("hola desde appjs");

//connect db
require("./Db");

app.listen(3000, () => {
  console.log("App running at localhost:3000");
});
