function UserFactory() { 
  this.createUser = function (username, password) { 
    // create an object
    let user = {}
    // fill the object
    user.username = username;
    user.password = password;
    // return object
    return user;
  }
}


function main() { 
  let users = [];
  let factory = new UserFactory();
  users.push(factory.createUser('John', '12344'));
  users.push(factory.createUser('Tom', '12344'));
  users.push(factory.createUser('James', '12344'));
  users.push(factory.createUser('Andrew', '12344'));

  console.log(users);
}

main();