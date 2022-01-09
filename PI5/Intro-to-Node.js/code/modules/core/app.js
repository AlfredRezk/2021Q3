// const fs = require('fs');
// const path = require('path')

// fs.writeFileSync(path.resolve(__dirname,'output.txt'), 'Just a dummy file')
// console.log('File created !!')


const url = require('url');
const qs = require('querystring');

const mywebsite = 'https://www.mywebsite.com:800/test?q=search&page_size=5&apikey=1234'

let urlObj = url.parse(mywebsite);
let qsObj = qs.parse(urlObj.query);
console.log(qsObj.page_size)



