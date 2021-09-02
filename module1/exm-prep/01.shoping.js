/* 
Input
Read from console 4 numbers:
• First line rest time - an integer in the range [20 … 40]
• Second line order price per hardware part - real number in the interval [2.00 … 69.00]
• On a third line order price per software - real number in the range [3.00 ... 100.00]
• Fourth line price for white frappe - real number in the range [0.50 ... 7.00]
Output 
You must print two lines on the console:
• Total spent money during the break - formatted to the second decimal
• The remaining time for relaxation
*/

function main(restTime, ppHardware, ppSoftware, frapPrice) {
	let timeLeft = restTime;
	let totalPrice = 0;

	// Subtract time spend to buy hardware (3time *2min) = 6
	timeLeft -= 6;
	// subtract time spend to buy software (2time * 2min) = 4;
	timeLeft -= 4;
	// Subtract time spend to but white frappe (5min)
	timeLeft -= 5;

	// Price for Hardware
	totalPrice += ppHardware * 3;
	// Price for Software
	totalPrice += ppSoftware * 2;
	// Price for frappe
	totalPrice += frapPrice;

	// Print Total spent money during the break
	console.log(totalPrice.toFixed(2));

	// Print The remaining time for relaxation
  console.log(timeLeft);
}

main(20,2,4,3)
