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

router.get("/cadastrarViuvaNegra", function (req, res){
    objetivoController.cadastrarViuvaNegra(req,res);
});

router.get("/cadastrar7BBs", function (req, res){
    objetivoController.cadastrar7BBs(req,res);
})

router.get("/buscarObjetivosPorSave/:idDesafio", function (req, res) {
    objetivoController.buscarObjetivosPorSave(req, res);
  });

module.exports = router;