var saveModel = require("../models/saveModel");

function listar(req, res) {
    saveModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var idUsuario = req.body.idUsuario;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    if (idUsuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    }

    saveModel.cadastrar(nome, idUsuario).then(function(resposta){
        res.status(200).send("Save criado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}