const Sequelize= require("sequelize");
const sequelize = require('../../util/database');
const Voyageur = sequelize.define('voyageurs',{  
    numVoyageur:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nomVoyageur:{
        type: Sequelize.STRING,
        allowNull: false
    } 
});

module.exports = Voyageur;