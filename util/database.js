const {Sequelize} =require('sequelize');

const sequelize = new Sequelize("webcup", "root", "",{
    host:"localhost",
    dialect: "mysql"
});

module.exports = sequelize;

