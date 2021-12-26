
const Sequelize = require('sequelize');
const database = require('./db');
 
const Users = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    name: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    type_user: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
})
 
module.exports = Users;