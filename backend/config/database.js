//database.js

const { Sequelize } = require('sequelize');

 const sequelize = new Sequelize('usuarios','root','Jimmy26',{
    host:'localhost',
    dialect:'mysql'
 });

 module.exports = sequelize;