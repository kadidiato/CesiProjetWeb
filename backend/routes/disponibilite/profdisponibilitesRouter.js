var express = require('express');
var router = express.Router();
var disponibilitesCtrl = require('./disponibilitesCtrl');
var validerDisponibilites = require('./validerDisponibilites');

//route qui gère la recuperation d'une disponibilites
//url: GET /api/disponibilites/:id
router.get('/:profId', validerDisponibilites.getByProfId(), validerDisponibilites.validate, disponibilitesCtrl.getByProfId);





module.exports = router;