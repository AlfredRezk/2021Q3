function main(n, m) {
  
  // Parse n and m to numbers
  n = Number(n);
  m = Number(m);

  let result = 0;
  for (let i = n; i <= m; i++) {
    result += i;
  }

  // print the result 
  console.log(result);


}
main("1", "5");
main("-8", "20");