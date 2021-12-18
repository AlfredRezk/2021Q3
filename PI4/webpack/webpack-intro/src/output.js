import logo from './logo.svg';



function output() { 
console.log("Hello");
  let img = document.createElement('img');
  img.src = logo;
  img.id = 'output'
  return img;
}

export default output;