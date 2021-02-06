const {Sequelize,DataTypes} = require("sequelize");

const sequelize = require('../../util/database');

const Reservation = sequelize.define('reservation',{
    dateReserve:{
        type: DataTypes.DATEONLY,
        allowNull: false
    }
})