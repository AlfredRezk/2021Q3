
// {
//   'Mike' => ['Hello word', 'Hi'], 
//   John => []
// }


function main(arr) {
	let map = new Map()
	// Get the first command
	let [command, name, message] = arr.shift().split("->");
	while (command !== "Statistics") {
		switch (command) {
      case "Add":
        if (map.has(name)) {
          console.log(`${name} is already registered`);
        } else { 
          map.set(name, [])
        }
				break;
      case "Send":
        if (!map.has(name)) {
          console.log(`${name} is not registered`);
        } else { 
          let emails = map.get(name);
          emails.push(message);
          map.set(name, emails)
        }
				break;
      case "Delete":
        if (!map.has(name)) {
          console.log(`${name} not found`);
        } else { 
          map.delete(name);
        }
				break;
		}

		// Get the next command
		[command, name, message] = arr.shift().split("->");
  }
  

  // Convert the map to an array 

  let outArr = Array.from(map);
  console.log(outArr);

  outArr.sort((a,b)=> b[1].length -a[1].length || a[0].localeCompare(b[0]))

  console.log(`Users count: ${outArr.length}`);

  outArr.forEach(user => { 
    let [username, emails] = user;
    console.log(username);
    emails.forEach(email => { 
       console.log(` - ${email}`);
    })

   //  console.log(emails.map(email => ` - ${email}`).join('\n'))
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
