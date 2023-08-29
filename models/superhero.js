'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Superhero.init({
    nickName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      field: 'nick_name',
      validate: {
        notEmpty: true
      }
    },
    realName: {
      type: DataTypes.STRING(100),
      field: 'real_name'
    },
    originalDescription: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'original_description'
    },
    catchPhrase: {
      type: DataTypes.STRING,
      field: 'catch_phrase'
    }
  }, {
    sequelize,
    modelName: 'Superhero',
    tableName:'superheros',
    underscored: true
  });
  return Superhero;
};