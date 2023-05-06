const Sequelize  = require('sequelize');
const { Op } = require("sequelize");
const ReservationModel =require('../../models/reservation/Reservation');
const Train =require('../../models/train/Train');
const Voyageur =require('../../models/voyageur/Voyageur');
const sequelize = require("../../util/database");
exports.getAllReservation = async(req,res,next) => {
    const reservation = await ReservationModel.findAll({include: [Train ,Voyageur]});
    res.json(reservation);
};

exports.getReservation = async(req,res,next) => {
    const reservation = await ReservationModel.findOne({
        include: [Train,Voyageur],
        where:{
           numReserve: req.params.numReserve
        }
    });
    res.json(reservation);
};

exports.postAddReservation = async(req, res, next) => {

  let numTrain = req.body.trainNumTrain;
  let numVoyageur = req.body.voyageurNumVoyageur;
  let frais= req.body.frais;
  let dateReserve = req.body.dateReserve
  console.log(`numtrain = ${numTrain}`);
  console.log(`numVoyageur = ${numVoyageur}`);
  console.log(`frais = ${frais}`);
  console.log(`date = ${dateReserve}`);
  const reservation = await ReservationModel.create({trainNumTrain:numTrain,
    voyageurNumVoyageur: numVoyageur, frais: frais , dateReserve:dateReserve});
   res.json(reservation);
};

exports.deleteReservation= async(req, res , next) => {
    const isDelete = await ReservationModel.destroy({
        where: {numReserve:req.params.numReserve}
    })
    res.json({isDelete: isDelete});
};

exports.updateReservation= async (req, res, next) => {
    const reservation = await ReservationModel.findOne({
        where:{numReserve:req.params.numReserve}
    });
    console.log(req.body.trainNumTrain);
    reservation.trainNumTrain = req.body.trainNumTrain;
    reservation.voyageurNumVoyageur = req.body.voyageurNumVoyageur;
    reservation.dateReserve = req.body.dateReserve;
    reservation.frais= req.body.frais;
    const updateReservation = await reservation.save();
    res.json(updateReservation);
};

//visualisation de voyageur par Train

exports.VisualVoyageurParTrain =async(req, res, next) => {
    const voyageursTrain = await ReservationModel.findAll({
        include:[Train,Voyageur],
        where:{trainNumTrain: req.params.numTrain}
    }) 
    
    res.json(voyageursTrain);
}

exports.recetteTrain = async(req,res,next) => {
    console.log(typeof req.params.annee);
    const recette = await ReservationModel.findOne({
        include:Train,
        attributes: [
            'trainNumTrain',
            [sequelize.fn('sum', sequelize.col('frais')), 'total'],
          ],
        where: {
            trainNumTrain:{
                [Op.and]:[req.params.numTrain]
            },
            dateReserve:{
                [Op.substring]:[req.params.annee]
            }
        },
        group: ['trainNumTrain']
       });

    /*   const totalAmount = await ReservationModel.findAll({
        attributes: [
          'trainNumTrain',
          [sequelize.fn('sum', sequelize.col('frais')), 'total_amount'],
        ],
        group: ['trainNumTrain'],
      });*/
    //  console.log(recette)
       /*
       [Op.and]:[
                {
                    trainNumTrain: req.params.annee
                }
            ]
       */
       //  {dateReserve:req.params.annee},
    //[Sequelize.fn('COUNT',Sequelize.col('TrainNumTrain')),'n']
   /* const recette = await sequelize.query("SELECT * FROM `reservations`,`voyageurs` WHERE reservations.voyageurNumVoyageur=voyageurs.numVoyageur",{
        type: QueryTypes.SELECT
    })*/
  
    res.json(recette);
}
