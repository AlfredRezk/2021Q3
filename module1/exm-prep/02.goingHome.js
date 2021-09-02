/* Problem 2. Going Home
Five guys attend a gaming event to take part in a tournament, but after that they have to go back to their
hometown. You have to find out the distance to their city in kilometers , calculate the gasoline consumption in liters
per 100 km , and the amount they have to pay for gasoline in total. They only have the money earned from the
tournament . Help them calculate whether they will be able to get back home with their money earned and what
amount they will be left with . If they don’t have enough money , they can not go back and the amount is split
between them .

Input
The input is read from the console and contains exactly 4 lines:
• On the first line is the distance in kilometers - an integer in the range [0..100000]
• On the second line is the gasoline consumption per 100 kilometers - an integer in the range [0...100]
• On the third line gasoline price per liter - real number in the range [0.0...50.0]
• The fourth row is the money they have won from the tournament - an integer in the range [0...100000]

Output
The console prints 1 line where {earned money} and {share of each} are real numbers rounded to the second
decimal point :
• If the money earned is more than or equal to the cost:
"You can go home. {earned money} money left."
• If it is not enough:
"Sorry, you cannot go home. Each will receive {share of each} money."
*/

function main(distance, litPer100km, gasPricePerLitter, amountWon) {

  // Amount of liters the car need to go home 
  let litersNeeded = distance * litPer100km / 100
  // Total cost of gas needed 
  let totalCost = gasPricePerLitter * litersNeeded;

  if (amountWon >= totalCost) {
    // amount left over after paying for gas 
    let leftOver = amountWon - totalCost;
    console.log(`You can go home. ${leftOver.toFixed(2)} money left.`);
  } else {
    // Each guy share to get their way home;
    let share = amountWon / 5;
    console.log(`Sorry, you cannot go home. Each will receive ${share.toFixed(2)} money.`)
  }
}

main(100,5,1.2,6)