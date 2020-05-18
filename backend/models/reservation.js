'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
      datereservation: DataTypes.DATE,
      coursId: DataTypes.INTEGER,
      eleveId: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};