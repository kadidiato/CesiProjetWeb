var express = require('express');
var router = express.Router();
var coursCtrl = require('./coursCtrl');
var validerCours = require('./validerCours');


//route qui gère la recuperation des  cours d un professeur 
//url: GET /api/profcours/:id
//router.get('/:profId', validerCours.getByProfId(), validerCours.validate, coursCtrl.getByProfId);
router.get('/:profId',validerCours.getByProfId(),validerCours.validate,coursCtrl.getByProfId);


module.exports = router;