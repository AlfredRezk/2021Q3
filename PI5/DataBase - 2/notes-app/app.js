const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appRoutes = require('./routes');
const  expressHbs = require('express-handlebars').engine
const port = 3000
const app = express()

// View Engine - Handlebars setup
// configure the view engine
app.engine("hbs", expressHbs({
  extname: 'hbs', 
  layoutsDir: 'templates/layouts', 
  defaultLayout: 'main.hbs', 
  partialsDir: path.join(__dirname, 'templates', 'partials'), 
  runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    }
  
}));
// set the view engine to the configured view engine
app.set('view engine', 'hbs')

// set the views folder to templates 
app.set('views', path.join(__dirname, 'templates'))

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')) )
app.use( appRoutes)


app.use('*', (req, res) => { 
  res.status(404)
  res.send('<h1> Page Not Found <h1>')
})

const dbUrl = "mongodb+srv://alfred:alfred00@cluster0.bmyec.mongodb.net/notes";

mongoose
  .connect(dbUrl)
  .then(() => { 
  console.log('Connected to DB')
  app.listen(port, console.log(`Server running on port ${port} ...`));
}).catch(err=> console.log(err))
