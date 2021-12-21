
import Kinvey from './Kinvey';


// States or global data that are shared with views 
window.db = new Kinvey("kid_ryNwWsM9F", "8a4311885b5c4715a2cee67476f70458");
window.formData = {};
window.msgs = [];
window.sharedData = {};

import { getHome, getCreate,getProfile  } from './controllers/furCtrl';
import { getLogin, getSignup, postSignup, postLogin , getLogout} from './controllers/authCtrl';

const app = Sammy('#container', function () {

  // Configure sammy with HBS
  this.use('Handlebars', 'hbs');

  this.get('/', getHome)
  this.get('/create', getCreate)
  this.get('/profile', getProfile)
  this.get('/login', getLogin)
  this.post('/login', postLogin)
  this.get('/signup', getSignup)
  this.post('/signup', postSignup)
  this.get('/logout', getLogout)

});

// load the initial route 
app.run('/signup')