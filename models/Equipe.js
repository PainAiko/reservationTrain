const Sequelize= require("sequelize");
const sequelize = require('../util/database');
const Equipe = sequelize.define('equipes',{  
    idEquipe:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nom: {
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

module.exports = Equipe;