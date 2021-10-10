function main(arr) { 

  // Get the email address 
  let email = arr.shift()
  // get the command arguments 
  let [command, arg] = arr.shift().split(' ')

  while (command !== 'Complete') { 

    switch (command) { 
      case 'Make':
        if (arg === 'Upper') {
          email = email.toUpperCase()
        } else if (arg === 'Lower') { 
          email = email.toLowerCase();
        }
        console.log(email);

        // arg === "Upper"
				// 	? (email = email.toUpperCase())
				// 	: (email = email.toLowerCase());
        break;
      case 'GetDomain':
    
        console.log(email.substr(-arg));
        break;
      case 'GetUsername':
        let index = email.indexOf('@');
        //If the Email doesn’t contain the @ symbol,
        if (index === -1) {
          console.log(`The email ${email} doesn't contain the @ symbol.`);
        } else { 
          console.log(email.substring(0, index))
        }
        break;
      case 'Replace':

        let regex = new RegExp(`${arg}`,'g')
        email = email.replace(regex, '-');
        console.log(email)

        // while (email.indexOf(arg) !== -1) { 
        //   email = email.replace(arg, '-')
        // }
        break;
      case 'Encrypt':
        // Encrypt the string to Ascii code
        let enc= email.split('').map(ch=> ch.charCodeAt()).join(' ')
        console.log(enc);
        break;
    }


    // Get the next command from the array
    [command, arg] = arr.shift().split(" ");
  }


}

main([
	`Mike123@somemail.com`,
	`Make Upper`,
	`GetDomain 3`,
	`GetUsername`,
	`Encrypt`,
	`Complete`,
]);