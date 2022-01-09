const fs = require('fs');

// Blocking
//const data = fs.readFileSync('./text.txt', 'utf-8')
//console.log(data);

// Non-Blocking
fs.readFile('./text.txt', 'utf-8', (err, data) => { 
  if (err) console.log(err);
  console.log(data);
})