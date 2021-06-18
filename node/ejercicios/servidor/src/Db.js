const mongoose = require("mongoose");

const URI = "mongodb://localhost:27017/pruebas";
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

const { connection } = mongoose;

connection.once("open", () => {
  console.log("conectado perro");
});

connection.on("error", (error) => {
  console.log("la cagada mi chan", error);
});
