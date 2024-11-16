var express = require("express");
var router = express.Router();

var desafioController = require("../controllers/desafioController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /desafios/cadastrar
    desafioController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /desafios/listar
    desafioController.listar(req, res);
});

router.get("/buscarDesafiosPorUsuario/:idUsuario", function (req, res) {
    desafioController.buscarDesafiosPorUsuario(req, res);
  });

module.exports = router;