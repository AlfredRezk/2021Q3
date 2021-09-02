/*Input
The user reads the following data into separate lines:
• Width of free space - integer in range [1...1000];
• Length of free space - an integer in the range [1...1000];
• Height of free space - an integer in the range [1...1000];
• On the following lines (until the "Done" command is received) - number of computers that are transferred
to the hall - integer numbers in the range [1...10000];
The program must end reading data at command "Done" or if there is no free space left.

Output
Print one of the following lines on the console:
• If you reach the "Done" command and there is still free space:
"{free space} Cubic meters left."
• If there is no more free space before the "Done" command is received:
"No more free space! You need {space needed} Cubic meters more."
*/

function main(width, length, height, computerArray) {
  // Total space for the hall
  let totalSpace = width * length * height;
  // computers space
  let computerSpace = 0;
  // Initial amount of computers 
  let computerDelivery = computerArray.shift();
  
  while (computerDelivery !== "Done" && computerDelivery !== undefined) {
    
    computerSpace += computerDelivery;
		// Receive the next computer delivery      
    computerDelivery = computerArray.shift();
  }

//  check the total computer space
  if (totalSpace >= computerSpace) {
    let freeSpace = totalSpace - computerSpace;
    console.log(`${freeSpace} Cubic meters left.`);
  } else {
    let spaceNeeded = computerSpace - totalSpace;
    console.log(`No more free space! You need ${spaceNeeded} Cubic meters more.`)
  }

}

main(10, 10, 2, [20, 20, 20,20, 122, "Done"]);