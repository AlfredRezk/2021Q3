const fs = require('fs');

const products = [
  { name: 'TV', price: 148 }, 
  {name: 'Radio', price:45}
]

// fs.writeFileSync('./myFile.json', JSON.stringify(products));

fs.writeFile('./myFile.json', JSON.stringify(products), (err) => { 
  if(err) console.log(err)
})