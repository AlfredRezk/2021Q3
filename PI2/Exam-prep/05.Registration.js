// A registration is valid when:
// - The username is surrounded by "U$"
// - The username needs to be minimum 3 characters long, start with an uppercase letter, followed only by lowercase letters
// - The password is surrounded by "P@$"
// - The password needs to start with minimum 5 alphabetical letters (not including digits) and must end with a digit

function main(arr) { 

  let pattern = /\bU\$(?<username>[A-Z][a-z]{2,})U\$P@\$(?<password>[A-za-z]{5,}\d+)P@\$/g;
  let counter = 0;
  let num = arr.shift();

  arr.forEach(reg => {
    let match = pattern.exec(reg); 
    if (match) {
      counter++;
      let { username, password } = match.groups;
      console.log("Registration was successful");
      console.log(`Username: ${username}, Password: ${password}`);
    } else { 
      console.log("Invalid username or password");
    }
	})
  console.log(`Successful registrations: ${counter}`);
}

main([
	3,
	`U$MichaelU$P@$asdqwe123P@$`,
	`U$NameU$P@$PasswordP@$`,
	`U$UserU$P@$ad2P@$`,
]);