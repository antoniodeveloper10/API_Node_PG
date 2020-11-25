module.exports = {
    dialect: 'postgres', // tipo de banco que foi me conectar
    host: 'localhost',
    username: 'postgres',
    password: 'ns1109TI',
    database: 'sqlnodes',
    define: {
        timestamps: true, // informa que as tabelas teram colunas com datatime criada e atualizada
        underscored: true,
    },
};

