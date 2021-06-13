const Sequelize = require('sequelize');
const connection = new Sequelize('guiperguntas','root','toor',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;