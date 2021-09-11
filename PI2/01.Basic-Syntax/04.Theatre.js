function main(day, age) {
  
  let cost;
  if (day === 'Weekday') {
    
    // check for age 
    if (age >= 0 && age <= 18) {
      cost = '12$';
    } else if (age > 18 && age <= 64) {
      cost = '18$';
    } else if (age > 64 && age <= 122) {
      cost = '12$';
    } else {
      cost = 'Error!'
    }

  } else if (day === 'Weekend') {
		// check for age
		if (age >= 0 && age <= 18) {
			cost = '15$';
		} else if (age > 18 && age <= 64) {
			cost = '20$';
		} else if (age > 64 && age <= 122) {
			cost = '15$';
		} else {
			cost = "Error!";
		}
	} else  {
		// check for age
		if (age >= 0 && age <= 18) {
			cost = '5$';
		} else if (age > 18 && age <= 64) {
			cost = '12$';
		} else if (age > 64 && age <= 122) {
			cost = '10$';
		} else {
			cost = "Error!";
		}
	}

  console.log(cost)

}

main("Holiday", -12);