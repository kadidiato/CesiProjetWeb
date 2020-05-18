var express = require('express');
var router = express.Router();
var disponibilitesCtrl = require('./disponibilitesCtrl');
var validerDisponibilites = require('./validerDisponibilites');

//recuperer toutes les disponibilite
//url: GET /api/disponibilites
router.get('/', validerDisponibilites.getAll(), validerDisponibilites.validate, disponibilitesCtrl.getAll);

//route qui gère la recuperation d'une disponibilites
//url: GET /api/disponibilites/:id
router.get('/:id', validerDisponibilites.getById(), validerDisponibilites.validate, disponibilitesCtrl.getById);

//route pour créer une disponibilite
//url: POST /api/disponibilites
router.post('/', validerDisponibilites.save(), validerDisponibilites.validate, disponibilitesCtrl.save)

//route pour supprimer une disponibilite
//url: DELETE /api/disponibilites/:id
router.delete('/:id', validerDisponibilites.getById(),
    validerDisponibilites.validate,
    disponibilitesCtrl.destroy);


//route pour mettre à jour une disponibilite
//url: PUT /api/disponibilites
router.put('/', validerDisponibilites.save(), validerDisponibilites.validate, disponibilitesCtrl.update)

module.exports = router;