import {Partial, Template} from "./js/Template";
import { contacts } from './data/contacts';

import Header from './views/header.js';
import Main from './views/main.js'
import './style.css';

const partials = new Partial(Header, 'appTitle', { title: 'My Contacts' })

const mainTemp = new Template(Main, { usersContacts: contacts }, '#contacts', partials);

mainTemp.render();

document.querySelectorAll('button').forEach(btn => { 
  btn.addEventListener('click', (e)=>{
  e.target.nextElementSibling.classList.toggle('show')
  })
})
