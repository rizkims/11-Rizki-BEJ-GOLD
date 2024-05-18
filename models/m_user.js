'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class m_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  m_user.init({
    full_name: {
      types:DataTypes.STRING,
      allowNull:false,
      defaultValue:false
    },
    email: {
      types:DataTypes.STRING,
      allowNull:false,
      defaultValue:false
    },
    address: {
      types:DataTypes.STRING,
      allowNull:false,
      defaultValue:false
    },
    address: {
      types:DataTypes.TIMESTAMP,
      allowNull:false,
      defaultValue:false
    },
    address: {
      types:DataTypes.STRING,
      allowNull:false,
      defaultValue:false
    },
  }, {
    sequelize,
    modelName: 'm_user',
  });
  return m_user;
};