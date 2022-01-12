const fs = require('fs');


// fs.renameSync('./dummy.txt', './myDummyFile.js');

fs.rename('./dummy.txt', './myDummyFile.js', (err) => { 
  if(err) console.log(err)
})