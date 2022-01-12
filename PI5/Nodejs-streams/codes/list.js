const fs = require('fs');

// Sync
let data = fs.readdirSync('./', 'utf8');
console.log(data);

// Async
fs.readdir('./', 'utf8', (err, data) => { 
  if (err) return console.log(err)
  console.log(data);
})

console.log('End of App');