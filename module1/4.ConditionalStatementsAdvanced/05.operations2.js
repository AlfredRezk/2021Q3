function main(num1, num2, operator) {
  
  let result = eval('' + num1 + operator + num2);

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}

main(11,12,'+')