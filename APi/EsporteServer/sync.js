const sequelize = require('./config/database');
const User = require('./models/User');
const Menu = require('./models/Menu');

sequelize.sync()
    .then(() => console.log('Tabelas Sincronizadas Com Sucesso!'))
    .catch((error) => console.error('Erro ao Sincronizar Tabelas: ', error));

module.exports = { User, Menu };

