const express = require("express");
const router = express.Router();

const db = require("../base-orm/sequelize-init");

router.get("/api/articulosfamilias", async function (req, res, next) {
  let data = await db.articulosfamilias.findAll({
    attributes: ["IdArticuloFamilia", "Nombre"],
  });
  res.json(data);
});

// recuperar un articulo familia por id
router.get("/api/articulosfamilias/:id", async function (req, res, next) {
  let data = await db.articulosfamilias.findOne({
    attributes: ["IdArticuloFamilia", "Nombre"],
    where: { IdArticuloFamilia: req.params.id },
  });
  res.json(data);
});


module.exports = router;
