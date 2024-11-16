var express = require("express");
var router = express.Router();

var objetivoController = require("../controllers/objetivoController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /objetivos/cadastrar
    objetivoController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /objetivos/listar
    objetivoController.listar(req, res);
});

router.get("/buscarObjetivosPorDesafio", function (req, res) {
    objetivoController.buscarObjetivosPorDesafio(req, res);
  });

module.exports = router;