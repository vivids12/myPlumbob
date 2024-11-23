var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM objetivos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarObjetivosPorSave(idDesafio) {

    var instrucaoSql = `SELECT nome FROM objetivos WHERE fkDesafio = ${idDesafio}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function cadastrar(descricao, peso, idDesafio) {
    var instrucao = `
    INSERT INTO objetivos (fkDesafio, progresso, descricao, peso) VALUES ('${idDesafio}', false, ${descricao}, ${peso})`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrarViuvaNegra() {
    var selectSave = `
    SELECT idDesafio FROM desafio ORDER BY idDesafio DESC LIMIT 1
    `;

    var instrucao = `
    INSERT INTO objetivos(fkDesafio, progresso, descricao, peso) VALUES 
    ((${selectSave}), FALSE, 'Atinjir nível 5 na habilidade de carisma', 1),
    ((${selectSave}), FALSE, 'Casar-se a primeira vez', 2),
    ((${selectSave}), FALSE, 'Matar o primeiro marido', 2),
    ((${selectSave}), FALSE, 'Casar-se com o último marido', 2),
    ((${selectSave}), FALSE, 'Matar o último marido', 2),
    ((${selectSave}), FALSE, 'Reviver um dos maridos', 3),
    ((${selectSave}), FALSE, 'Casar-se novamente com esse marido', 1),
    ((${selectSave}), FALSE, 'Alcançar nível 10 na habilidade de Carisma', 3),
    ((${selectSave}), FALSE, 'Alcançar nível 10 na habilidade de Dança', 3),
    ((${selectSave}), FALSE, 'Alcançar nível 10 na habilidade de Culinária', 3),
    ((${selectSave}), FALSE, 'Alcançar nível 10 na habilidade de Gourmet', 3),
    ((${selectSave}), FALSE, 'Acumular §1.000.000 em dinheiro', 4);`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    buscarObjetivosPorSave,
    cadastrarViuvaNegra
};