var express = require('express');
var router = express.Router();
var profsCtrl = require('./profsCtrl');
var validerProfs = require('./validerProfs');

//recuperer toutes les cours reserves
//url: GET /api/prof
router.get('/', validerProfs.getAll(), validerProfs.validate, profsCtrl.getAll);

//route qui gère la recuperation d'un cours
//url: GET /api/prof/:id
router.get('/:id', validerProfs.getById(), validerProfs.validate, profsCtrl.getById);

//route pour créer un cours
//url: POST /api/prof
router.post('/', validerProfs.save(), validerProfs.validate, profsCtrl.save);
router.post('/enregistrerOuConnecter', validerProfs.save(), validerProfs.validate, profsCtrl.getOrCreate);

//route pour supprimer un cours
//url: DELETE /api/prof/:id
router.delete('/:id', validerProfs.getById(),
    validerProfs.validate,
    profsCtrl.destroy);


//route pour mettre à jour un cours
//url: PUT /api/prof
router.put('/', validerProfs.save(), validerProfs.validate, profsCtrl.update);

module.exports = router;