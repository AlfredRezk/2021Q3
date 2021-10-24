function main(inputArr) {
  // create arrays 
  let mainArr = [];
  let secArr = [];

  // define starting index 
  let mainIndex = 0;
  let secIndex = inputArr[0].length - 1;

  // Loop through every array 
  inputArr.forEach(row => {

    // Push the main diagonal number to mainArr 
    mainArr.push(row[mainIndex]);
    secArr.push(row[secIndex]);
    mainIndex++;
    secIndex--;
  })

let mainSum = mainArr.reduce((sum, num)=> sum+num, 0)
let secSum = secArr.reduce((sum, num)=> sum+num, 0)

  console.log(`${mainSum} ${secSum}`)
}


main([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]);