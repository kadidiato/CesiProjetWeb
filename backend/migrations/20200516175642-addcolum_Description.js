'use strict';

module.exports = {

    up: async function (queryInterface, Sequelize) {
        let transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.addColumn('Disponibilites', 'description', {
                type: Sequelize.STRING,
            }, {transaction: transaction}),

                await transaction.commit();
            return await Promise.resolve();
        } catch (err) {
            await transaction.rollback();
            return await Promise.reject(e);
        }
    },


    down: async (queryInterface, Sequelize) => {
        let transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.removeColumn('Disponibilites', 'description', {transaction: transaction})


            await transaction.commit();
            return await Promise.resolve();
        } catch (err) {
            await transaction.rollback();
            return await Promise.reject(e);
        }

    }
};
