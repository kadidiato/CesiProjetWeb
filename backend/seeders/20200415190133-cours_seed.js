'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cours', [{
           // eleveId: 1,
            profId: 1,
            dateCour: new Date(),
            heureCour: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Cours', null, {});
    }
};
