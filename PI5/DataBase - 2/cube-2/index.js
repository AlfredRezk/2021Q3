const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('morgan');
const colors = require('colors')
const path = require('path')
const connectDB = require('./config/db');
const app = express();
// Import Routes files
const cubeRoutes = require("./routes/cube");
const accessoryRoutes = require('./routes/accessory');

// Environment variables 
dotenv.config({path:"./config/config.env"});
// Configure the server PORT 
const port = process.env.PORT || 3000;
// Connect to DB
connectDB();
// Setup Template Engine 
app.engine('hbs', handlebars({
  extname: '.hbs', 
  partialsDir: path.join(__dirname, 'views', 'partials')
}))

app.set('view engine', 'hbs')

// Middlewears 
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }))

// Setup the logger 
if (process.env.NODE_ENV === 'development') { 
  app.use(logger('dev'))
}

// load the routes
app.use(cubeRoutes)
app.use(accessoryRoutes);

// load page not found
app.use((req, res) => { 
    res.render('404.hbs')
})

const server = app.listen(port, console.log(`server running on port ${process.env.PORT} ...`.yellow.underline))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => { 
  console.log(`Error:${err.message}`.red);
  server.close(() => { 
    console.log(`Server has been stopped...`.red.underline);
    process.exit(1)
  })
})