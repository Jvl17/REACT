const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('login_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;