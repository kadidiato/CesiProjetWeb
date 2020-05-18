var express = require('express');
var router = express.Router();
var eleveCtrl = require('./elevesCtrl');
var validerEleves = require('./validerEleves');

//recuperer toutes les cours reserves
//url: GET /api/eleves
router.get('/', validerEleves.getAll(), validerEleves.validate, eleveCtrl.getAll);

//route qui gère la recuperation d'un cours
//url: GET /api/eleves/:id
router.get('/:id', validerEleves.getById(), validerEleves.validate, eleveCtrl.getById);

//route pour créer un cours
//url: POST /api/eleves
router.post('/', validerEleves.save(), validerEleves.validate, eleveCtrl.save)

//route pour supprimer un cours
//url: DELETE /api/eleves/:id
router.delete('/:id', validerEleves.getById(),
    validerEleves.validate,
    eleveCtrl.destroy);


//route pour mettre à jour un cours
//url: PUT /api/reservationsCours
router.put('/', validerEleves.save, validerEleves.validate, eleveCtrl.update)

module.exports = router;