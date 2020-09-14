const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const _ = require('lodash');
const fileUpload = require('express-fileupload');
const app = express();
const mysql = require('mysql');
const http = require('https').Server(app); 
const config = require('./config')
 
 // enable files upload
app.use(fileUpload({
    createParentPath: true,
}));
// parse application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//add minddleware
app.use(cors());
app.use(morgan('dev'));
config.data.conf()
port = config.data.port()
// //create database connection
// const conn = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'investax'
// });

//route
require('./routers')(app);


//Server listening
app.listen(port,() =>{
  console.log('Server started on port '+port);
});

