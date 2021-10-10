/** @format */

function main(arr) {
	// Get the cards
	let cards = arr.shift().split(":");
	// New cards Array;
	let newArr = [];
	// Get the first command
	let [command, card, arg] = arr.shift().split(" ");

	while (command !== "Ready") {
		switch (command) {
			case "Add":
				//If the card doesn't exist in print "Card not found."
				if (!cards.includes(card)) {
					console.log("Card not found.");
				} else {
					// Adds the card to the end of the deck.
					newArr.push(card);
				}
				break;
			case "Insert":
				arg = Number(arg);
				//If the card doesn't exist or the index is invalid print "Error!"
				if (!cards.includes(card)) {
					console.log("Error!");
				} else if (!newArr[arg]) {
					console.log("Error!");
				} else {
					// Insert the card at the given index of the deck.
					newArr.splice(arg, 0, card);
				}
				break;
			case "Swap":
				// [Innervate, Moonfire, Pounce, Claw, Wrath, Bite]
				// Swap Claw Moonfire
				// index1 = 3
				// index2 = 1
				// newArr[index1] => newArr[3] = 'Moonfire'
				// [Innervate, Moonfire, Pounce, Moonfire, Wrath, Bite]
				// newArr[index2] => newArr[1] = 'Claw'
				// [Innervate, Claw, Pounce, Moonfire, Wrath, Bite]
				let index1 = newArr.indexOf(card);
				let index2 = newArr.indexOf(arg);
				let temp = card;
				newArr[index1] = arg;
				newArr[index2] = temp;
				break;
      case "Remove":
        //If the card doesn't exist in print "Card not found."
        if (!newArr.includes(card)) {
          console.log("Card not found.");
        } else {
          // Splice
          // let index = newArr.indexOf(card);
          // newArr.splice(index, 1);
          // filter
          newArr = newArr.filter((c) => c !== card);
        }
        break;
      case "Shuffle":
        newArr.reverse();
        break;
		}

		// Get the next command
		[command, card, arg] = arr.shift().split(" ");
	}

	console.log(newArr.join(" "));
}

main([
	`Innervate:Moonfire:Pounce:Claw:Wrath:Bite`,
	`Add Moonfire`,
	`Add Pounce`,
	`Add Bite`,
	`Add Wrath`,
	`Insert Claw 0`,
	`Swap Claw Moonfire`,
	`Remove Bite`,
	`Shuffle deck`,
	`Ready`,
]);
