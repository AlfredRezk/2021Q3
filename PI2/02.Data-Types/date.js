// Current date
let date = new Date()

// Custom date 
let customDate = new Date('March 12 1980')

date.setMonth('11') // 0-11
date.setFullYear('1984');
date.setHours(6)  //0-23
date.setDate('24');
date.setMinutes('24');
date.setSeconds('3');


console.log(date.getHours())
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())   //Monday 1, ... Sunday 7
console.log(date.getMinutes())
console.log(date.getSeconds())

// Time stamp 
console.log(Date.now());
