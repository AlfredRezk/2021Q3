// 1-7
// function main(n) {
  
//   let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//   if (n >= 1 && n <= 7) {
//     console.log(days[n - 1]);
    
//   } else {
//     console.log('Invalid day!')
//   }

// }
function main(n) {
  
  let days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  if (n >= 1 && n <= 7) {
    console.log(days[n]);
    
  } else {
    console.log('Invalid day!')
  }

}

main(3)
main(6)
main(0);
main(11)