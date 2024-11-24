var express = require("express");
var router = express.Router();

var regraController = require("../controllers/regraController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /regras/cadastrar
    regraController.cadastrar(req, res);
});

router.get("/cadastrarViuvaNegra", function (req, res){
    regraController.cadastrarViuvaNegra(req,res);
});

router.get("/cadastrar7BBs", function (req, res){
    regraController.cadastrar7BBs(req,res);
})

router.get("/buscarRegrasPorSave/:idDesafio", function (req, res) {
    regraController.buscarRegrasPorSave(req, res);
  });

module.exports = router;