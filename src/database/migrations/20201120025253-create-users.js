'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primarykey: true,
          autoIncrement: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
           type: Sequelize.STRING,
           allowNull: false,
        },
        created_at :{
           type: Sequelize.DATE,
           allowNull : false,
        },
        update_at : {
          type: Sequelize.DATE,
          allowNull : false,
        }
     });    
                                            },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
