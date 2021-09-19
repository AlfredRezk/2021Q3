// 2.00 - 2.99 - "Fail"
// • 3.00 - 3.49 - "Poor"
// • 3.50 - 4.49 - "Good"
// • 4.50 - 5.49 - "Very good"
// • 5.50 - 6.00 - "Excellent"

function main(grade) {
  console.log(checkGrade(grade))
}

function checkGrade(grade) {
	if (grade >= 2.0 && grade <= 2.99) {
		return "Fail";
	} else if (grade >= 3.0 && grade <= 3.49) {
		return "Poor";
	} else if (grade > 3.5 && grade <= 4.49) {
		return "Good";
	} else if (grade >= 4.5 && grade <= 5.49) {
		return "Very Good";
	} else if (grade >= 5.5 && grade <= 6.0) {
		return "Excellent";
	}
}




main(3.33)
