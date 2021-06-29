const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes");

const app = express();
//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use(router);

app.listen(8000, () => {
  console.log("app running at http://localhost:8000");
});
