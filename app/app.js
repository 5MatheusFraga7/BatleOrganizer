const express = require("express");
const app = express();

const Sequelize = require('sequelize')
const sequelize = new Sequelize('BattleOrganizer', 'root','12345678', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){

    console.log("CONECTADO COM SUCESSO!");

}).catch(function(erro){

    console.log("ERRO AO SE CONECTAR: " + erro);

})

app.listen(8081, function(){
    console.log("Funcionando em: http://localhost:8081");
});

app.get('/', function(req, res) {
    res.send("OIEE");
})