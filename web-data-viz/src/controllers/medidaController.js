var medidaModel = require("../models/medidaModel");

function buscarProgresso(req, res) {

    const limite_linhas = 7;

    var idDesafio = req.params.idDesafio;

    // console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarMaximo(idDesafio).then(function (resultadoMaximo) {
        if (resultado.length > 0) {
            medidaModel.buscarProgresso(idDesafio).then(
                function(resultadoProgresso){
                    res.json(200).json(resultado);

                })
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarProgresso,
    buscarMedidasEmTempoReal

}