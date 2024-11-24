var database = require("../database/config");

function buscarMaximo(idDesafio) {

    var instrucaoSql = `SELECT SUM(peso) AS maximo FROM objetivos WHERE fkDesafio = ${idDesafio};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarProgresso(idDesafio){
    var instrucaoSql = `SELECT SUM(peso) AS progresso FROM objetivos WHERE progresso = 1 AND fkDesafio = ${idDesafio};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarProgresso,
    buscarMaximo,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
