/** @format */

function main(month, hours, people, timeOfDay) {
	let price = 0;

	if (
		(month === "March" || month === "April" || month == "May") &&
		timeOfDay == "day"
	) {
		price = 10.5;
	} else if (
		(month === "March" || month === "April" || month == "May") &&
		timeOfDay == "night"
	) {
		price = 8.4;
	} else if (
		(month === "June" || month === "July" || month == "August") &&
		timeOfDay == "day"
	) {
		price = 12.6;
	} else if (
		(month === "June" || month === "July" || month == "August") &&
		timeOfDay == "night"
	) {
		price = 10.2;
	}

	// If the number of ppl is more than or equal to 4 - 10%
	if (people >= 4) {
		price -= price * 0.1;
		// price = price*0.9
	}

	// if the number of hours is more than 5 they receive 50%
	if (hours >= 5) {
		price = price * 0.5;
	}

	console.log(`Price per person for one hour: ${price.toFixed(2)}`);
	let total = price * hours * people;
	console.log(`Total cost of the visit: ${total.toFixed(2)}`);
}

main("March", 3, 3, "day");
