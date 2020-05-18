var express = require('express');
var router = express.Router();
var reservationCoursCtrl = require('./reservationCoursCtrl');
var validerReservationCours = require('./validerReservationCours');

//recuperer toutes les cours reserves
//url: GET /api/reservationsCours
router.get('/', validerReservationCours.getAll(), validerReservationCours.validate, reservationCoursCtrl.getAll);

//route qui gère la recuperation d'un cours
//url: GET /api/reservationsCours/:id
router.get('/:id', validerReservationCours.getById(), validerReservationCours.validate, reservationCoursCtrl.getById);

//route pour créer un cours
//url: POST /api/reservationsCours
router.post('/', validerReservationCours.save(), validerReservationCours.validate, reservationCoursCtrl.save);

//route pour supprimer un cours
//url: DELETE /api/reservationsCours/:id
router.delete('/:id', validerReservationCours.getById(),
    validerReservationCours.validate,
    reservationCoursCtrl.destroy);


//route pour mettre à jour un cours
//url: PUT /api/reservationsCours
router.put('/', validerReservationCours.save(),
    validerReservationCours.getById(),
    validerReservationCours.validate,
    reservationCoursCtrl.update);

module.exports = router;