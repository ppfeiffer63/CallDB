const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
const path = require('path');
const app = express();
require('dotenv').config();

// To get the database password from the .env file
const PASS = process.env.DATABASE_PASSWORD;

// Importing routes
const customerRoutes = require('./routes/customer');
const callsRoutes = require('./routes/calls');

// settings
app.set('port', process.env.PORT || 8001);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'calldb',
    password: 'calldb',
    port: '3306',
    database: 'calldb'
}, 'single'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/customer/', customerRoutes);
app.use('/calls/', callsRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port 8001');
})
