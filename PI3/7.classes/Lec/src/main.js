// Import files 
const User = require('../lib/User')

User.addUser('Johnny', 'JohnY@Gmail.com', 'asdasd')
console.log(User.fetchUsers())