
import Kinvey from './Kinvey';
// Link Kinvey DB
window.db = new Kinvey("kid_ryNwWsM9F", "8a4311885b5c4715a2cee67476f70458");

import { getHome, getCreate } from './controllers/furCtrl';
import { getLogin, getSignup, postSignup } from './controllers/authCtrl';

const app = Sammy('#container', function () {

  // Configure sammy with HBS
  this.use('Handlebars', 'hbs');
  this.get('/', getHome)
  this.get('/create', getCreate)
  this.get('/login', getLogin)
  this.get('/signup', getSignup)
  this.post('/signup', postSignup)

});

// load the initial route 
app.run('/login')