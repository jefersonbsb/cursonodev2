const Sequelize = require("sequelize");
const connection = require("../src/database");

const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Pergunta.sync({force: false})
    .then(()=>{
        console.log("Tabela criada com sucesso!");
    }).catch((erro)=>{
        console.log("Erro na criação da tabela: " + erro);
    });