
function usdToEuro() {
	let userInput = document.getElementById("dollars").value;
	let dollars = Number(userInput); // "15" -> 15  "Kingsland" -> NaN
	let euros = dollars * 0.883795087;

	document.getElementById("euros").value = euros;
}
