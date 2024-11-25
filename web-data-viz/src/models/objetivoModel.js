var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM objetivos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarObjetivosPorSave(idDesafio) {
    var instrucaoSql = `SELECT idObj, descricao, progresso, peso FROM objetivos WHERE fkDesafio = ${idDesafio}`;
  
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
  }

function cadastrar(descricao, peso, idDesafio) {
    var instrucao = `
    INSERT INTO objetivos (fkDesafio, progresso, descricao, peso) VALUES ('${idDesafio}', false, '${descricao}', ${peso})`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizarObjetivosCumpridos(idObj){
    var instrucaoSQL = `
    UPDATE objetivos SET progresso = 1 WHERE idObj = ${idObj};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

function atualizarObjetivosNaoCumpridos(idObj){
    var instrucaoSQL = `
    UPDATE objetivos SET progresso = 0 WHERE idObj = ${idObj};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
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

function cadastrar7BBs(){
    var selectSave = `
    SELECT idDesafio FROM desafio ORDER BY idDesafio DESC LIMIT 1
    `;

    var instrucao = `
    INSERT INTO objetivos(fkDesafio, progresso, descricao, peso) VALUES 
    ((${selectSave}), FALSE, 'É necessário criar pelo menos 4 dos 7 filhos', 1),
    ((${selectSave}), FALSE, 'Quando bebê, atingir o nível 5 na habilidade de movimento', 1),
    ((${selectSave}), FALSE, 'Quando bebê, atingir o nível 5 na habilidade de comunicação', 2),
    ((${selectSave}), FALSE, 'Quando bebê, atingir o nível 5 na habilidade de troninho', 2),
    ((${selectSave}), FALSE, 'Quando criança, atingir nota 10 na escola', 2),
    ((${selectSave}), FALSE, 'Quando criança, completar a aspiração', 3),
    ((${selectSave}), FALSE, 'Quando criança, atinjir nível 5 em alguma habilidade', 1),
    ((${selectSave}), FALSE, 'Quando adolescente, alcançar a nota 10 da escola', 2),
    ((${selectSave}), FALSE, 'Quando adolescente, atinjir nível 10 em alguma habilidade', 3),
    ((${selectSave}), FALSE, 'Todos os filhos atingirem a idade jovem adulta', 3);`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarProgresso(idDesafio){
    console.log('To no model');  
    var instrucaoSQL = `
        SELECT SUM(peso) AS total, 
        (SELECT SUM(peso) FROM objetivos WHERE progresso = 1 
        AND fkDesafio = ${idDesafio}) AS progresso 
        FROM objetivos WHERE fkDesafio = ${idDesafio};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSQL);
    return database.executar(instrucaoSQL);
}

module.exports = {
    cadastrar,
    listar,
    buscarObjetivosPorSave,
    cadastrarViuvaNegra,
    cadastrar7BBs,
    atualizarObjetivosCumpridos,
    atualizarObjetivosNaoCumpridos,
    buscarProgresso
};