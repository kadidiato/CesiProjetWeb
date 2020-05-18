'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Eleves', [{
            nomEleve: 'Mallé',
            prenomEleve: 'Bafing',
            mailEleve: 'bafing@faso.ml',
            niveauEleve: 'Avancé',
            rueEleve: 'Da Monzon',
            villeEleve: 'Markala',
            zipEleve: '00',
            paysEleve: 'Mli',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nomEleve: 'Mallé',
            prenomEleve: 'Bafing',
            mailEleve: 'bafing@faso.ml',
            niveauEleve: 'Avancé',
            rueEleve: 'Da Monzon',
            villeEleve: 'Markala',
            zipEleve: '00',
            paysEleve: 'Mli',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Eleves', null, {});
    }
};
