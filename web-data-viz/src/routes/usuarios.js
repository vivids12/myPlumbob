var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})
// sem mudanças
router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get("/buscar/:id", function (req, res) { 
    usuarioController.buscarUsuarioPeloId(req, res); 
});

// router.get("/buscarSavesPorUsuario", function (req, res) { 
//     usuarioController.buscarSavesPorUsuario(req, res); 
// });

module.exports = router;