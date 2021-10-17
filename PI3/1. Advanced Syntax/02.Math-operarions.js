function main(num1, num2, opt) {
  
  // Method 1

  // switch (opt) {
  //   case '+': console.log(num1 + num2);break
  //   case '-': console.log(num1 - num2);break
  //   case '*': console.log(num1 * num2);break
  //   case '/': console.log(num1 / num2);break
  //   case '**': console.log(num1 ** num2); break;
  //   case '%': console.log(num1 % num2); break;
  // }

  // Method2 
  // eval('2+2/5*6')
  console.log(eval(`${num1}${opt}${num2}`))


}

main(5, 6, "+");
main(3, 5.5, "*");