// [
// 	{
// 		username: "Mike",
// 		emails: ["Hi ", "Hello world"],
// 	},
//   {
//     username: "John",
//     emails: ["Working!", "See you "]
//   },
// ];


class User { 
  constructor(username, emails) { 
    this.username = username;
    this.emails = emails
  }
}

function main(arr) {
  let users = [];
  let match;
  // Get the first command
  let [command, name, message] = arr.shift().split('->')
  while (command !== 'Statistics') { 

    switch (command) { 
      case 'Add':
        //  check if the user already exists  
        match = users.find(user => user.username === name)
        if (!match) {
          users.push(new User(name, []))
        } else { 
          console.log(`${name} is already registered`);
        }
        break;
      case 'Send':
        match = users.find(user => user.username === name);
        if (!match) {
          console.log(`${name} is not registered`)
        } else { 
          match.emails.push(message)
        }
        break;
      case 'Delete': 
        match = users.find((user) => user.username === name)
        if (!match) {
          console.log(`${name} not found!`);
        } else { 
          users = users.filter((user) => user.username !== name);

        }
        break;
    }

    // Get the next command
    [command, name, message] = arr.shift().split("->");
  }

  // Sorting the users array
  users.sort((a, b) => b.emails.length - a.emails.length || a.username.localeCompare(b.username))
  
  console.log(`Users count: ${users.length}`);
  users.forEach(user => { 
    console.log(user.username);
    user.emails.forEach(email => { 
      console.log(` - ${email}`)
    })
  })


}

main([
	`Add->Mike`,
	`Add->George`,
  `Send->George->Hello World`,
  `Send->George->Some random test mail`,
	`Send->Mike->Hello, do you want to meet up tomorrow?`,
	`Send->George->It would be a pleasure`,
	`Send->Mike->Another random test mail`,
	`Statistics`,
]);