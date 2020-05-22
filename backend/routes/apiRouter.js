var express = require('express');

// declaration des routes
const coursRouter = require('./cours/coursRouter');
const eleveRouter = require('./eleves/elevesRouter');
const reservationCoursRouter = require('./reservationsCours/reservationCoursRouter');
const profsRouter = require('./profs/profsRouter');
const disponibilitesRouter = require('./disponibilite/disponibilitesRouter');
const profCourRouter = require('./cours/profCoursRouter');
const profdisponibilitesRouter = require('./disponibilite/profdisponibilitesRouter');
const elevereservationCoursRouter = require('./reservationsCours/elevereservationCoursRouter');

exports.router = (function () {
    var apiRouter = express.Router();

    apiRouter.use('/cours', coursRouter);
    apiRouter.use('/eleves', eleveRouter);
    apiRouter.use('/reservationsCours', reservationCoursRouter);
    apiRouter.use('/profs', profsRouter);
    apiRouter.use('/disponibilites', disponibilitesRouter);
    apiRouter.use('/profCours', profCourRouter);
    apiRouter.use('/profdisponibilite', profdisponibilitesRouter);
    apiRouter.use('/eleveReservationsCours', elevereservationCoursRouter);

    return apiRouter;
})();