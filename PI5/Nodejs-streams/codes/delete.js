const fs = require('fs');

// fs.unlinkSync('./myFile.json');


fs.unlink("./myFile.json", (err) => { 
  if(err) console.log(err)
});
