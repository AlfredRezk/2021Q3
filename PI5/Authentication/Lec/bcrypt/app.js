const bcrypt = require('bcryptjs');

const salt = 12;
const password = 'Password'
const hash = "$2a$12$bkIvNVcTpzAa2MHrBXlC.NIa16EQpDElVT36b/qa.DIJi8ODsYb6";

bcrypt.hash(password, salt).then(hashedPassword => { 
  console.log(hashedPassword)
})

bcrypt.compare(password, hash).then(match => { 
  console.log(match)
})
