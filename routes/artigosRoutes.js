const express = require("express");

const artigoRoutes = express.Router();
const artigoController = require("../controllers/artigosControllers");

artigoRoutes.get("/", artigoController.listarArtigos);
artigoRoutes.get("/:numero", artigoController.buscarArtigoPorId);
artigoRoutes.post("/", artigoController.criarArtigo);
artigoRoutes.delete("/:titulo", artigoController.deletarArtigo);

module.exports = artigoRoutes;
