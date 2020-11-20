const { Model, DataTypes } = require('sequelize');

class User extends Model{
  static init(sequelize){
      super.init({
          name: DataTypes.STRING,
          email: DataTypes.STRING,
      },{// abaixo o nome da conexao
          sequelize
      })
  }
}

module.exports = User;