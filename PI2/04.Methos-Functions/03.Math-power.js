function main(num, power) {
  let output = pow(num, power);
  console.log(output);
}

function pow(num, power) {
  let result = 1;
  for (let i = 1; i <= power; i++) {
    result *= num;
  }
  // return the result number
  return result;
}

main(3,4)