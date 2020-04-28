
const bodyParser = require('body-parser')
require('dotenv').config({path: '.env'})

var path = require('path');
const express = require("express");
const adminRoutes = require("./routes/index");
const config = require('./config/load-parameters');
require('./config/db.mongo')();

const app = express();

app.use(bodyParser.json({limit: '5mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}))

app.use('/images', express.static('uploads'))



// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*");
//   next();
// });

adminRoutes(app);

app.use('',express.static('./dist/client-admin'));

app.get('*', function(req,res) {    
  console.log(__dirname)
  res.sendFile(path.join(__dirname,'../dist/client-admin/index.html'));
});
  



app.use(function (err, req, res, next) {
  if(err){
    return res.status(500).json({status: false, message: err.message, stackTrace: err.stack})
  }
  
})

module.exports = app;