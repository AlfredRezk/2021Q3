const User = function (name) { 
  this.name = name;
  this.role = 'user';
  this.access = [{dashboard:true, edit: false, delete:false}]
}

const Admin = function (user) { 
  this.name = user.name;
  this.access = [{ dashboard: true, edit: true, delete: true }];
  this.role = 'Admin';
}


function main() { 
  // component
  let user = new User('John');
  console.log(user);
  // decorator 
  let admin = new Admin(user);
  console.log(admin)

}

main();