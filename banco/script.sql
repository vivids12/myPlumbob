CREATE DATABASE myplumbob;
USE myplumbob;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha varchar(50)
);

INSERT INTO usuario VALUES (DEFAULT, 'vivi', 'vivi@gmail.com', '123');
INSERT INTO usuario VALUES (DEFAULT, 'gabi', 'gabi@gmail.com', '123');

CREATE TABLE save(
	idSave INT AUTO_INCREMENT,
    fkUsuario INT NOT NULL,
    PRIMARY KEY (idSave, fkUsuario),
    nome VARCHAR(45),
    descricao VARCHAR(100),
    dtCriacao DATE,
    CONSTRAINT fkSaveUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE desafio(
	idDesafio INT AUTO_INCREMENT,	
    fkSave INT,
    fkUsuario INT,
    PRIMARY KEY (idDesafio, fkSave, fkUsuario),
    nome VARCHAR(45),
    descricao VARCHAR(500),
    CONSTRAINT fkSaveDesafio FOREIGN KEY (fkSave) REFERENCES save(idSave),
    CONSTRAINT fkUsuarioDesafio FOREIGN KEY (fkUsuario) REFERENCES save(fkUsuario)
);

CREATE TABLE objetivos(
	idObj INT AUTO_INCREMENT,
    fkDesafio INT NOT NULL,
    PRIMARY KEY (idObj, fkDesafio),
    progresso BOOLEAN,
    descricao VARCHAR(100),
    peso INT,
    CONSTRAINT fkObjDesafio FOREIGN KEY (fkDesafio) REFERENCES desafio(idDesafio)
);

CREATE TABLE regras(
	idRegra INT AUTO_INCREMENT,
    fkDesafio INT NOT NULL,
    PRIMARY KEY (idRegra, fkDesafio),
    descricao VARCHAR(200),
    CONSTRAINT fkRegraDesafio FOREIGN KEY (fkDesafio) REFERENCES desafio(idDesafio)
);

SELECT SUM(peso) AS total, 
        (SELECT SUM(peso) FROM objetivos WHERE progresso = 1 
        AND fkDesafio = 11) AS progresso 
        FROM objetivos WHERE fkDesafio = 11;