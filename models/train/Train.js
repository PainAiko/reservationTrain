const Sequelize= require("sequelize");
const sequelize = require('../../util/database');
const Train = sequelize.define('trains',{  
    numTrain:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    design:{
        type: Sequelize.STRING,
        allowNull: false
    },
    itineraire:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Train;