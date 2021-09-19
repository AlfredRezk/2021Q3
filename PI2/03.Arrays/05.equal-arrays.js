function main(arr1, arr2) {
  
  let sum = 0;
  let index = 0;
  let areEqual = true;


  for (let i = 0; i < arr1.length; i++) {

    if (arr1[i] === arr2[i]) {
      sum += Number(arr1[i])
    } else {
      areEqual = false;
      index = i;
      break;
    }
    
  }

  if (areEqual) {
    console.log(`Arrays are identical. Sum: ${sum}`);
  } else {
    console.log(`Arrays are not identical. Found difference at ${index} index.`)
  }

}


main(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);