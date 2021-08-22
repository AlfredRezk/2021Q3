function main(num) {
  let points = 0;

  if (num <= 100) {
    points += 5;
  }
  if (num >= 100) {
    points += num * 0.2;
  }

  // If the number is bigger than 1000, the bonus points are 10% of the number

  if (num % 2 == 0) {
    points += 1;
  } else if (num % 10 === 5) {
    points += 2;
  }


}

main(100)