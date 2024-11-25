var express = require("express");
var router = express.Router();

var objetivoController = require("../controllers/objetivoController");

router.post("/cadastrar", function (req, res) {
    objetivoController.cadastrar(req, res);
});

router.post("/cadastrarViuvaNegra", function (req, res){
    objetivoController.cadastrarViuvaNegra(req,res);
});

router.post("/cadastrar7BBs", function (req, res){
    objetivoController.cadastrar7BBs(req,res);
})

router.get("/buscarObjetivosPorSave/:idDesafio", function (req, res) {
    objetivoController.buscarObjetivosPorSave(req, res);
});

router.post("/atualizarObjetivosCumpridos/:idObj", function (req, res) {
    objetivoController.atualizarObjetivosCumpridos(req, res);
});

router.post("/atualizarObjetivosNaoCumpridos/:idObj", function (req, res) {
    objetivoController.atualizarObjetivosNaoCumpridos(req, res);
});

router.get("/buscarProgresso/:idDesafio", function (req, res){
    objetivoController.buscarProgresso(req, res);
})

module.exports = router;