function main(arr) { 
  let map = new Map();

  // 1. Iterate to fill the Map with Key/Value 
  for (let data of arr) { 

    // let [name, ...grades] = data.split();
    let grades = data.split(' ');
    let name = grades.shift();
    grades = grades.map(Number);

    // if that student is not in my map 
    if (!map.has(name)) {
      // Add to the map 
      map.set(name, grades);
    } else { 
      //  Student already in the Map
      // get oldGrades,
      let oldGrades = map.get(name);    //[2,5]   //[5,6] => [2,5,5,6]
      // concat the input grades to the old grades
      let newGrades = oldGrades.concat(grades);
      // let newGrades = [...oldGrades, ...grades];
      // update the student value in the map
      map.set(name, newGrades);
    }
  }

  //convert the Map to an array 
  let mapArr = Array.from(map);
  // Sort the array based on Average Grades
  mapArr.sort((a, b) => average(a[1], b[1]))

  for (let [name, grades] of mapArr) { 
    console.log(`${name} -> ${grades.join(', ')}`)
  }
 
}





function average(a, b) {
  

  // let sumA = 0;
  // let sumB = 0;

  // for (let num of a) { 
  //   sumA += num;
  // }

  // for (let num of b) {
  //   sumB += num;
  // }

  // let averageA = sumA / a.length;
  // let averageB = sumB/b.length


  let averageA = a.reduce((sum, num) => sum + num, 0) / a.length;
  let averageB = b.reduce((sum, num) => sum + num, 0) / b.length;

  return averageA - averageB;
}

main(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);