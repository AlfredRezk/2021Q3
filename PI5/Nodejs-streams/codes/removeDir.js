const fs = require('fs');

// fs.rmdirSync('./myDir');

fs.rmdir('./myDir', (err) => { 
  if (err) console.log(err);
});