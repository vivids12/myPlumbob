var express = require("express");
var router = express.Router();

var saveController = require("../controllers/saveController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /saves/cadastrar
    saveController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /saves/listar
    saveController.listar(req, res);
});

module.exports = router;