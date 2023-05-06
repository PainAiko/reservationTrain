const Sequelize = require("sequelize");

const sequelize = require('../../util/database');
const Train = require("../train/Train");
const Voyageur = require("../voyageur/Voyageur");
const moment = require('moment');
const Reservation = sequelize.define('reservations',{
    numReserve:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    trainNumTrain:{
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
            model:Train,
            key:'numTrain'
        }
    },
    voyageurNumVoyageur:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
            model: Voyageur,
            key: 'numVoyageur'
        }       
    },
    dateReserve:{
        type: Sequelize.DATEONLY,
     /*   get:function() {
            return moment.utc(this.getDataValue('DATETIME')).format('DD/MM/YYYY')
        },*/
        allowNull: false
    },
    frais:{
        type:Sequelize.DOUBLE,
        allowNull: false
    }
});
Reservation.belongsTo(Voyageur,{constraints: true , onDelete:'CASCADE' ,onUpdate:'CASCADE'});
Voyageur.hasMany(Reservation);

Reservation.belongsTo(Train,{constraints:true ,onDelete:'CASCADE',onUpdate:'CASCADE'});
Train.hasMany(Reservation);

module.exports = Reservation;