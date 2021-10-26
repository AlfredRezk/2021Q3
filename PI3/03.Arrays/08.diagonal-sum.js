function main(inputArr) {

  // create empty arrays 
  let mainArr = [];
  let secArr = [];
  let mainIndex = 0;
  let secIndex = inputArr[0].length - 1;
  // Loop through every array 

  inputArr.forEach(row => {
    mainArr.push(row[mainIndex]);
    secArr.push(row[secIndex]);
    mainIndex++;
    secIndex--;
  });

  // add the mainArr, secArr array items
  
  let mainSum = 0;
  mainArr.forEach(num => mainSum += num);

  let secSum = secArr.reduce((sum, num) => sum + num, 0);
  console.log(mainSum+' '+ secSum)
}


main([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]);