const Sequelize = require('sequelize');
// carrega as configurações de acesso ao banco
const dbConfig = require('../config/database');

// faz a conexao com a base
const connection = new Sequelize(dbConfig);

// exporta a conexao para poder ser acessada por outro arquivo
module.exports = connection;