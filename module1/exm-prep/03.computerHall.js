/*The following discounts are also offered in the following sequence:
• For a group of four or more people, the cost per person is reduced by 10%
• For 5 hours or more , the price is reduced by 50% per person
Write a program that calculates the price per person per hour and the total amount .

Input
The input is read from the console and contains exactly 4 lines :
• On the first line - the month - a text with options " January ", " February ", " March ", " April ", " May ",
" June ", " July ", " August ", " September ", " October ", " November ", " December "
• On the second line - the number of hours spent , an integer [1...10]
• On the third line - the number of people in the group, an integer [1...10]
• The fourth line - time of the day - either " day " or " night "

Output
Print two lines on the console :
• On the first line : " Price per person for one hour: {price per person per hour} "
• On the second line : " Total cost of the visit: {total price} "
The price should be rounded to the second decimal place.

*/
function main(month, hours, people, timeOfDay) {
  let price=0;
  
  switch (month) {
    case "March":
    case "April":
    case "May":
      if (timeOfDay === 'day') price = 10.5
      else price = 8.4;
      break;
  
    case "June":
    case "July":
    case "August":
       if (timeOfDay === 'day') price = 12.6
      else price = 10.20;
      break;
  }

  // If the number of ppl is more than or equal to 4 - 10%
  if (people >= 4) {
    price -= price * 0.1
    // price = price*0.9 
  }

  // if the number of hours is more than 5 they receive 50% 
  if (hours >= 5) {
    price = price*0.5
  }

  console.log(`Price per person for one hour: ${price.toFixed(2)}`);
  let total = price * hours * people;
  console.log(`Total cost of the visit: ${total.toFixed(2)}`);

}

main("March", 3, 3, "day")