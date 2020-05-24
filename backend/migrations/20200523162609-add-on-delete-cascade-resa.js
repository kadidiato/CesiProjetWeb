'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeConstraint('Reservations', 'reservations_ibfk_2', {transaction: transaction});
      await queryInterface.addConstraint('Reservations', ['coursId'], {
        type: 'FOREIGN KEY',
        name: 'reservations_ibfk_2', // useful if using queryInterface.removeConstraint
        references: {
          table: 'Cours',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }, {transaction: transaction});

      await transaction.commit();
      return await Promise.resolve();
    } catch (err) {
      await transaction.rollback();
      return await Promise.reject(err);
    }
  },

  down: async (queryInterface, Sequelize) => {
    let transaction = await queryInterface.sequelize.transaction({autocommit: false});
    try {
      await queryInterface.removeConstraint('Reservations', 'reservations_ibfk_2', {transaction: transaction});
      await queryInterface.addConstraint('Reservations', ['coursId'], {
        type: 'FOREIGN KEY',
        name: 'reservations_ibfk_2', // useful if using queryInterface.removeConstraint
        references: {
          table: 'Cours',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action',
      }, {transaction: transaction});

      await transaction.commit();
      return await Promise.resolve();
    } catch (e) {
      await transaction.rollback();
      return await Promise.reject(e);
    }
  }
};
