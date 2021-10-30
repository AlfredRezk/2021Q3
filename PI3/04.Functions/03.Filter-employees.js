
function main(data, criteria) {
  // Parse data to an array of objects 
  let employeeArr = JSON.parse(data);
  
  // Get the criteria key and value
  let [key, value] = criteria.split('-');
  
  let employeeFilter = employeeArr.filter((emp) => emp[key] === value)
  console.log(employeeArr)
  
  // Print the matching employees
  // index. first_name last_name - email
  employeeFilter.forEach((emp, i) => {
    const {email, last_name, first_name } = emp
    console.log(`${i}. ${first_name} ${last_name} - ${email}`)
  });
  
}


main(`[{
"id": "1",
"first_name": "Ardine",
"last_name": "Bassam",
"email": "abassam0@cnn.com",
"gender": "Female"
}, {
"id": "2",
"first_name": "Kizzee",
"last_name": "Jost",
"email": "kjost1@forbes.com",
"gender": "Female"
},
{
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}]`,
	"gender-Female")

