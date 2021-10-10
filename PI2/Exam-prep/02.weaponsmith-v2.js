function main(arr) {
	
	// Get the particles names, first element in the array
	let particles = arr.shift().split("|");
  // Remove the done command
  arr.pop();


  arr.forEach((cmdStr) => { 

    let [command, input, index] = cmdStr.split(' ')
    	index = Number(index);
			// check the command is it move or check
			switch (command) {
				case "Move":
					// Check if the command move to the right and there is an element to its right
					if (input === "Right" && particles[index + 1]) {
						// let temp = particles[index];
						// particles[index] = particles[index + 1];
						// particles[index + 1] = temp;

						particles = particles
							.join(",")
							.replace(particles[index + 1], particles[index])
							.replace(particles[index], particles[index + 1]);
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
  })
  console.log(`You crafted ${particles.join("")}!`);

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