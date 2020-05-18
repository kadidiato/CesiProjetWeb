'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('Cours', 'matiere', {
        type: Sequelize.STRING,
      }, {transaction: transaction}),

          await queryInterface.addColumn('Cours', 'description', {
            type: Sequelize.STRING,
          }, {transaction: transaction})

      await transaction.commit();
      return await Promise.resolve();
    } catch (err) {
      await transaction.rollback();
      return await Promise.reject(e);
    }
  },

  down: async function (queryInterface, Sequelize) {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('Cours', 'matiere', {transaction: transaction}),

          await queryInterface.removeColumn('Cours', 'description', {transaction: transaction})

      await transaction.commit();
      return await Promise.resolve();
    } catch (err) {
      await transaction.rollback();
      return await Promise.reject(e);
    }
  }
};
