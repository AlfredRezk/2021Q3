function main(num1, num2, opt) {

  let operators = ['multiply', 'subtract', 'add', 'divide'];
  let mathOpt = ['*', '-', '+', '/']

  let index = operators.indexOf(opt);

  let result = eval(`${num1}${mathOpt[index]}${num2}`)
  console.log(result)


}

main(5, 5, "add");
