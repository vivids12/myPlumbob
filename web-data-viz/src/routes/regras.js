var express = require("express");
var router = express.Router();

var regraController = require("../controllers/regraController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /regras/cadastrar
    regraController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /regras/listar
    regraController.listar(req, res);
});

router.get("/buscarRegrasPorDesafio", function (req, res) {
    objetivoController.buscarRegrasPorDesafio(req, res);
  });

module.exports = router;