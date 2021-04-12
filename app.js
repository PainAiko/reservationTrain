const express = require('express');
const app = express();
const trainRoute =require('./routes/Train/trainRoute');
const voyageurRoute = require('./routes/voyageur/voyageurRoute');
const reservationRoute = require('./routes/reservation/reservationRoute');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

app.use(bodyParser.json());
app.use((req,res,next) =>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    //res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})
//app.use(cors());
app.use('/train',trainRoute);
app.use('/voyageur',voyageurRoute);
app.use('/reserve',reservationRoute);
sequelize.sync().then(result => {
    //console.log(result)
    app.listen(8080);
 }).catch(err=> console.log(err));
