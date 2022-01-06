
import Kinvey from './Kinvey';

// States or global data that are shared with views 
window.db = new Kinvey("kid_ryNwWsM9F", "8a4311885b5c4715a2cee67476f70458");
window.formData = {};
window.msgs = [];
window.sharedData = {};
window.allFurnitures = [];

import { getHome, getCreate,getProfile , postCreate, getDetails, getDelete, getEdit, postEdit} from './controllers/furCtrl';
import { getLogin, getSignup, postSignup, postLogin , getLogout} from './controllers/authCtrl';

const app = Sammy('#container', function () {

  // Configure sammy with HBS
  this.use('Handlebars', 'hbs');

  this.get('/', getHome)
  this.get('/create', getCreate)
  this.post('/create', postCreate)
  this.get('/profile', getProfile)
  this.get('/login', getLogin)
  this.post('/login', postLogin)
  this.get('/signup', getSignup)
  this.post('/signup', postSignup)
  this.get('/logout', getLogout)
  this.get("/details/:id", getDetails);
  this.get('/delete/:id', getDelete)
  this.get('/edit/:id', getEdit)
  this.post('/edit', postEdit)
  

});

// load the initial route 
app.run('/')