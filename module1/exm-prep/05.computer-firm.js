/* A computer company has hired you to calculate possible sales. Write a program that calculates the average rating
and possible sales for a certain number of computers . First, a number is entered from the console, which is the
number of computers . Then, one number is entered consecutively for each computer:
● The last digit of this number represents the rating. It will be in the range [2…6] .
● The remaining figures represent possible sales .

The computer sale is scaled based on a rating:
● Rating 2 takes 0% of possible sales.
● Rating 3 takes 50% of possible sales.
● Rating 4 takes 70% of possible sales.
● Rating 5 takes 85% of possible sales.
● Rating 6 takes 100% of possible sales.

Input
You must read from the console:
On the first line:
● n - Number of computers - integer in the range [1…10]
On the next n lines :
● The number representing sales and rating - an integer in the range [32…306]

Output
You must print on the console 2 lines :
● The number of sales made
● The average arithmetic rating for all computers
Sales and rating must be formatted to the second digit after the decimal point.
*/




function main(computeNums, salesAndRating) {

  let totalRatings = 0;
  let totalSales = 0;

  for (let i = 1; i <= computeNums; i++) {
    let num = salesAndRating.shift();

    let rating = num % 10;
    let sale = Math.trunc(num / 10);
    totalRatings += rating;

    switch (rating) {
      case 2: totalSales += sale * 0; break;
      case 3: totalSales += sale * 0.50; break;
      case 4: totalSales += sale * 0.70; break;
      case 5: totalSales += sale * 0.85; break;
      case 6: totalSales += sale * 1; break; 
    }

  }

  console.log(totalSales.toFixed(2));
  let avgRating = totalRatings / computeNums;
  console.log(avgRating.toFixed(2));
  
}

main(3, [103, 103, 103])