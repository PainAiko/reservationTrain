const Sequelize= require("sequelize");
const sequelize = require('../../util/database');
const Temoingnage = sequelize.define('temoingnages',{  
    nom: {
        type: Sequelize.STRING,
        allowNull: true
    },
    prenom: {
        type: Sequelize.STRING,
        allowNull: true
    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
   
});

module.exports = Temoingnage;