function main(arr) {
	
	// Get the particles names, first element in the array
	let particles = arr.shift().split("|");

	// Get the first command in the array and convert the command to an array
	let [command, input, index] = arr.shift().split(" ");

	// Loop through the commands
	while (command !== "Done") {
		//  Convert the index to number
		index = Number(index);
		// check the command is it move or check
		switch (command) {
			case "Move":
				// Check if the command move to the right and there is an element to its right
				if (input === "Right" && particles[index + 1]) {
					let temp = particles[index];
					particles[index] = particles[index + 1];
					particles[index + 1] = temp;

					// particles = particles
					// 	.join(",")
					// 	.replace(particles[index + 1], particles[index])
          //   .replace(particles[index], particles[index + 1]).split(',');
          
        } else if (input === "Left" && particles[index - 1]) {
					let temp = particles[index];
					particles[index] = particles[index - 1];
					particles[index - 1] = temp;
				}
				break;

			case "Check":
				if (input === "Odd") {
					// Print odd index locations in the particles array
					let odd = particles.filter((value, index) => index % 2 !== 0);
					console.log(odd.join(" "));
				} else if (input === "Even") {
					// Print even index locations in the particles array
					let even = particles.filter((value, index) => index % 2 === 0);
					console.log(even.join(" "));
				}
				break;
		}
		// Get the next Command
		[command, input, index] = arr.shift().split(" ");
  }
  console.log(`You crafted ${particles.join('')}!`);
}

main([
	`ha|Do|mm|om|er`,
	`Move Right 0`,
	`Move Left 3`,
	`Check Odd`,
	`Move Left 2`,
	`Move Left 10`,
	`Move Left 0`,
	`Done`,
]);