const Sequelize = require('sequelize');
// carrega as configurações de acesso ao banco
const dbConfig = require('../config/database');

const User = require('../models/User');



// faz a conexao com a base
const connection = new Sequelize(dbConfig);

// conectar  o model usuario a base
User.init(connection);

// exporta a conexao para poder ser acessada por outro arquivo
module.exports = connection;