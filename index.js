const express = require("express");
const routes = require("./src/routes");
const app = express();
const connection = require("./src/database");

/* Teste de conexão com o Banco de Dados
connection.authenticate().then(()=>{
    console.log("Conexão realizada com sucesso ao banco de dados!");
}).catch((error)=>{
    console.log("Ocorreu um erro na conexão ao banco de dados: " + error );
})
*/

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

app.listen(3000,()=>{
    console.log("Servidor rodando na url: https://localhost:3000")
});