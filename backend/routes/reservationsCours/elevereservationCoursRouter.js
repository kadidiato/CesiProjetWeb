var express = require('express');
var router = express.Router();
var reservationCoursCtrl = require('./reservationCoursCtrl');
var validerReservationCours = require('./validerReservationCours');

//route qui gère la recuperation tous les cours reservés par un eleve avec son id
//url: GET /api/elevereservationsCours/:eleveId


router.get('/:eleveId', validerReservationCours.getReservationByEleveId(), validerReservationCours.validate,
    reservationCoursCtrl.getcourOfEleve);



module.exports = router;