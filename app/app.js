const express = require("express");
const app = express();
const { engine } = require("express-handlebars")
const Sequelize = require('sequelize')



app.listen(8081, function(){
    console.log("Funcionando em: http://localhost:8081");
});


// ====== SEQUELIZE =======
const sequelize = new Sequelize('BattleOrganizer', 'root','12345678', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){

    console.log("CONECTADO COM SUCESSO!");

}).catch(function(erro){

    console.log("ERRO AO SE CONECTAR: " + erro);

})


// ======= TEMPLATE ENGINE =======

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "app/views");


// ======= ROUTES =======

app.get('/', function(req, res) {
    res.render("home");
})