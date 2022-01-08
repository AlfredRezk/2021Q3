
import Kinvey from './kinvey';
import { getHome, getAbout, getCatalogs, getCreate , postCreate, getDetails, getEdit, postEdit} from './controllers/catalog'
import { getLogin, postLogin, getRegister , postRegister, getLogout} from './controllers/user'

window.db = new Kinvey("kid_ryNwWsM9F", "8a4311885b5c4715a2cee67476f70458");
window.allTeams = [];

const app = Sammy('#main', function () { 
  this.use('Handlebars', 'hbs');

// Check and fetch all teams 
  db.get('teams', null, {username:'guest', password:'guest'}).then(res=> allTeams = res)

  this.get('/', getHome)
  this.get('/about', getAbout)
  this.get('/login', getLogin)
  this.post('/login', postLogin)
  this.get('/register', getRegister)
  this.post('/register', postRegister)
  this.get('/logout', getLogout)
  this.get("/catalog", getCatalogs);
  this.get("/create", getCreate);
  this.post("/create", postCreate);
  this.get('/catalog/:id', getDetails)
  this.get('/edit/:id', getEdit)
  this.post('/edit/:id', postEdit)
})

app.run('/')