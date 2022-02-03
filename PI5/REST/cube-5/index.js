const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const logger = require('morgan');
const colors = require('colors')
const path = require('path');
const multer = require('multer');
const connectDB = require('./config/db');
const app = express();
// Import Routes files
const cubeRoutes = require("./routes/cube");
const accessoryRoutes = require('./routes/accessory');
const authRoutes = require('./routes/auth')

// Environment variables 
dotenv.config({path:"./config/config.env"});
// Configure the server PORT 
const port = process.env.PORT || 3000;
// Connect to DB
connectDB(); 


// Configure multer 
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => { cb(null, 'images') }, 
  filename: (req, file, cb) => { cb(null, Date.now() + '-' + file.originalname) }
  
})

const fileFilter = (req, file, cb) => {
  const condition =
		(file.mimetype === "image/png" ||
		file.mimetype === "image/jpeg" ) 
  console.log(file)
  if (condition ) { 
    cb(null, true)
  }else {
    cb(null, false)
  }

}


app.use(multer({ storage: fileStorage, fileFilter: fileFilter, limits: {fileSize:1024*1024}}).single('imageUrl'))


// Middlewears 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Adding cors
app.use((req, res, next) => { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next()
})

// Setup the logger 
if (process.env.NODE_ENV === 'development') { 
  app.use(logger('dev'))
}

// load the routes
app.use(cubeRoutes)
// app.use(accessoryRoutes);
app.use(authRoutes);


// load page not found
app.use((req, res) => { 
  res.status(404).json({message: 'Error: resources not found !'})
})


// Express error handling 
app.use((error, req, res, next) => { 
  const status = error.statusCode || 500; 
  const message = error.message;
  res.status(status).json({ error: message });

})


const server = app.listen(port, console.log(`server running on port ${process.env.PORT} ...`.yellow.underline))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => { 
  console.log(err);
  console.log(`Error:${err}`.red);
  server.close(() => { 
    console.log(`Server has been stopped...`.red.underline);
    process.exit(1)
  })
})