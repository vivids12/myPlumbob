var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarProgresso/:idDesafio", function (req, res) {
    medidaController.buscarProgresso(req, res);
});

router.get("/ultimas/:idDesafio", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idDesafio", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

module.exports = router;