import { hide, show} from './lib.js';

const title = document.querySelector('h1');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  
  hide(title)
})
