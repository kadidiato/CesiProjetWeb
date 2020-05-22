'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    let transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('Cours', 'prix_cours_heure', {
        type: Sequelize.DOUBLE,
      }, { transaction: transaction }),

        await queryInterface.addColumn('Cours', 'status', {
          type: Sequelize.BOOLEAN,
        }, { transaction: transaction })

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
      await queryInterface.removeColumn('Cours', 'prix_cours_heure', {transaction: transaction}),

          await queryInterface.removeColumn('Cours', 'status', {transaction: transaction})

      await transaction.commit();
      return await Promise.resolve();
    } catch (err) {
      await transaction.rollback();
      return await Promise.reject(e);
    }
  }
};
