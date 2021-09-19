// function main(arr) {
//   let firstElement = Number(arr[0]);   // '20'=> 20
//   let lastElement = Number(arr[arr.length - 1])  // 40
//   console.log(firstElement + lastElement);
// }

function main(arr) {
  let firstElement = Number(arr.shift());   
  let lastElement = Number(arr.pop())
  console.log(firstElement + lastElement);
}

main(["20", "30", "40"]);