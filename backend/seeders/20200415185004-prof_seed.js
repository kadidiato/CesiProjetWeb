'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Profs', [{
            nomProf: 'Kane',
            prenomProf: 'Fatou',
            mailProf: 'm@m.fr',
            matiereProf: 'ma matiere',
            nbAvisPos: 34,
            nbAvisNeg: 4,
            niveauProf: 'Gros niveau',
            rueProf: 'BaZoumana',
            villeProf: 'Segou',
            zipProf: '00',
            paysProf: 'Mli',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nomProf: 'Kane',
            prenomProf: 'Fatou',
            mailProf: 'm@m.fr',
            matiereProf: 'ma matiere',
            nbAvisPos: 34,
            nbAvisNeg: 4,
            niveauProf: 'Gros niveau',
            rueProf: 'BaZoumana',
            villeProf: 'Segou',
            zipProf: '00',
            paysProf: 'Mli',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Profs', null, {});
    }
};
