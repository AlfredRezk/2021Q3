const express = require('express');
const { engine: hbs } = require('express-handlebars');
const appRoutes = require('./routes/app');
const userRoutes = require('./routes/user')
const app = express();

app.use(express.static('public'))

app.engine('hbs', hbs({
  extname: '.hbs', 
  partialsDir: __dirname+'/views/partials'
}))

app.set('view engine', 'hbs');


app.use(appRoutes);
app.use(userRoutes)


app.listen(3000)