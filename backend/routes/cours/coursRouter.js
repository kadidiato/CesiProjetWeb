var express = require('express');
var router = express.Router();
var coursCtrl = require('./coursCtrl');
var validerCours = require('./validerCours');

//recuperer tous les cours
//url: GET /api/cours
router.get('/', validerCours.getAll(), validerCours.validate, coursCtrl.getAll);

//route qui gère la recuperation d'un cours
//url: GET /api/cours/:id
router.get('/:id', validerCours.getById(), validerCours.validate, coursCtrl.getById);

//router.get('/:profId', validerCours.getByProfId(), validerCours.validate, coursCtrl.getByProfId);

//route pour créer un cours
//url: POST /api/cours
router.post('/', validerCours.save(), validerCours.validate, coursCtrl.save);

//route pour supprimer un cours
//url: DELETE /api/cours/:id
router.delete('/:id', validerCours.getById(),
    validerCours.validate,
    coursCtrl.destroy);

//route pour mettre à jour un cours
//url: PUT /api/cours
router.put('/', validerCours.save(), validerCours.validate, coursCtrl.update);

module.exports = router;