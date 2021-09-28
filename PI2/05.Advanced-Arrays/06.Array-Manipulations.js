function main(inputArr) { 

  // Get the array to manipulate;
  let arr = inputArr.shift().split(' ').map(Number );

  // iterate through the commands 
  inputArr.forEach((command) => { 

    // let com = command.split(' ')[0];  
    // let num = command.split(' ')[1];
    // let index = command.split(' ')[2];

    let [com, num, index] = command.split(' ')  //['Add', '3']
    
    // convert to numbers 
    num = Number(num);
    index = Number(index);

    switch (com) {
			case "Add":
				arr.push(num);
				break;
			case "Remove":
				// let i = arr.indexOf(num);
				// arr.splice(i, 1);
				arr = arr.filter((el) => el !== num); //[4,19,2,53,6,43] => [4, 19,53,6,43 ]
				break;
			case "RemoveAt":
				arr.splice(num, 1);
				break;
			case "Insert":
				arr.splice(index, 0, num);
				break;
		}

  })

  console.log(arr.join(' '))

}

main(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);