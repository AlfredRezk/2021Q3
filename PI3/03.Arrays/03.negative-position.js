function main(arr) {
  let output = [];

  arr.forEach(num => {
    // num < 0 ? output.unshift(num) : output.push(num);
    if (num >= 0) {
      output.push(num);
    } else {
     output.unshift(num); 
    }
  })

  console.log(output.join('\n'))
}

main([7, -2, 8, 9]);