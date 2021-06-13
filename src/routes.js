var express = require('express');
var routes = express.Router();

routes.get("/",(req,res)=>{
    res.render('index');
});

routes.get("/perguntar", (req,res)=>{
    res.render('perguntar')
});

routes.get("/login", (req,res)=>{
    res.render('login')
});

routes.get("/facebook", (req,res)=>{
    res.redirect('https://www.facebook.com/jeferson.barbosa.161214');
});

routes.get("/github", (req,res)=>{
    res.redirect('https://github.com/jefersonbsb');
});

routes.get("/linkedin", (req,res)=>{
    res.redirect('https://www.linkedin.com/in/jefersonbsb');
});

routes.post("/salvarPergunta", (req,res)=>{
    let titulo = req.body.titulo;
    let descricao = req.body.descricao;
    res.send("Título: " + titulo + " Descricao: " + descricao);
});

module.exports = routes;