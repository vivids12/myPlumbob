var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM save;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, idUsuario) {
    var instrucao = `
        INSERT INTO save (nome, fkUsuario) VALUES ('${nome}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};