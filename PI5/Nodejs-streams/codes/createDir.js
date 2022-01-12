const fs = require('fs');

// Sync
// fs.mkdirSync('./myDir')

// Async
fs.mkdir('./myDir', (err) => { 
  if (err) console.log(err);
})

console.log('Folder created ')