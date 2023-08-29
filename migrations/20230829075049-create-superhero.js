'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('superheros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nickName: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
        field: 'nick_name'
      },
      realName: {
        type: Sequelize.STRING(100),
        field: 'real_name'
      },
      originalDescription: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'original_description'
        
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: 'catch_phrase',
        defaultValue: 'Oh i dont need this....'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('superheros');
  }
};