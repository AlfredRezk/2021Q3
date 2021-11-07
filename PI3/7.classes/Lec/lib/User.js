let users = [
  {username:'john', email:'john@gmail.com', password:'1234'},
  {username:'Mike', email:'Mike@gmail.com', password:'1234'},
  {username:'Tom', email:'Tom@gmail.com', password:'1234'},
  {username:'David', email:'David@gmail.com', password:'1234'},
]


class User {
  
  static fetchUsers() {
    return users;
  }

  static addUser(username, email, password) {
    users.push({username, email, password})
  }

  static deleteUser(email) {
   let users = users.filter(user=> user.email !==email) 
  }
}

// export my class 
module.exports = User