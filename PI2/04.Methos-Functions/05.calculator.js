function main(num1, num2, opt) {
  
  switch (opt) {
    case 'add':
      let add = (a, b) => a + b;
      console.log(add(num1, num2));
      break;
    case 'subtract':
      let sub = (a, b) => a - b;
      console.log(sub(num1, num2));
      break;
    case 'multiply':
      let multiply = (a, b) => a * b;
      console.log(multiply(num1, num2));
      break;
    case 'divide':
      let divide = (a, b) => a / b;
      console.log(divide(num1, num2));
      break;
  }

}

main(5,5,'multiply')