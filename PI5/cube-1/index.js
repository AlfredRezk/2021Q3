const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path')
const cubeRoutes = require('./routes/cube');
const app = express();
dotenv.config();

const port = process.env.PORT || 3000;


// Setup Template Engine 
app.engine('hbs', handlebars({
  extname: '.hbs', 
  partialsDir: path.join(__dirname, 'views', 'partials')
}))

app.set('view engine', 'hbs')

// Middlewears 
app.use(express.static('static'));
app.use(bodyParser.urlencoded({ extended: false }))

// load the routes
app.use(cubeRoutes)

// load page not found
app.use((req, res) => { 
    res.render('404.hbs')
})


app.listen(port, console.log(`server running on port ${port} ...`))