const Sequelize = require('sequelize');
const sequelize = new Sequelize('BattleOrganizer', 'user', '12345678', {dialect: 'mysql', host: 'localhost'});

sequelize.authenticate().then(function(){

    console.log("DB CONECTADO COM SUCESSO!");

}).catch(function(erro){

    console.log("ERRO AO SE CONECTAR: " + erro);

})

module.exports = sequelize;

