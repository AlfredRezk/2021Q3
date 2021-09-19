// function main(arr) {
  
//   let oddSum = 0;
//   let evenSum = 0;


//   for (let i = 0; i < arr.length; i++) {
//     let num = Number(arr[i]);
//     if (num % 2 === 0) {
//       evenSum += num;
//     } else {
//       oddSum += num;
//     }
//   }

//   console.log(evenSum-oddSum)
// }

function main(arr) {
  
  let oddSum = 0;
  let evenSum = 0;

  for (let el of arr) {
    let num = Number(el);
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }

  console.log(evenSum-oddSum)
}

main([1,2,3,4,5,6])