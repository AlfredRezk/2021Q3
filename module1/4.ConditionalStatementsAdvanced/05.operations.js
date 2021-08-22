function main(num1, num2, operator) {
  
  let result;
  switch (operator) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    case '/': result = num1 / num2; break;
    case '%': result = num1 % num2; break;
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);

}

main(11,12,'+')