'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eleveId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Eleves',
            key: 'id',
        }
      },
      coursId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'Cours',
            key: 'id',
        }
      },
      datereservation: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reservations');
  }
};