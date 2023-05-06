const express = require('express');
const recetteRoute = express.Router();
const reservationController = require('../../controller/reservation/reservationController');

recetteRoute.get('/:numTrain/:annee',reservationController.recetteTrain);

module.exports = recetteRoute;