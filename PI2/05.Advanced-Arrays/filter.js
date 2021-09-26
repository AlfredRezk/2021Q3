let arr = [
  { name: 'James', age: 35}, 
  {name:'Mike', age:60}, 
  {name:'Sally', age:12}, 
  {name:'Anna', age:10}, 
  {name:'Tom', age:19}, 
]


let minors = arr.filter(user => user.age < 18)
console.log(minors)



