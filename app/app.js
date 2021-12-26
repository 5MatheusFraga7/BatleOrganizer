const express = require("express");
const app = express();
const { engine } = require("express-handlebars")
const Sequelize = require('sequelize')
const path = require('path')


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


// ======= FRONT LIBRARIES =======

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))


// ======= ROUTES =======

app.get('/', function(req, res) {
    res.render("home");
})