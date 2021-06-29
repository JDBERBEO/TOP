const router = require("express").Router();

router.route("/ruta").get(() => {
  console.log("hola");
});

module.exports = router;
