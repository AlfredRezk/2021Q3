const baseUrl = "https://kl-remotedb-default-rtdb.firebaseio.com/";

async function fetchBook(id) {
	const res = await fetch(`${baseUrl}/books/${id}/.json`);
	if (res.ok) {
		let data = await res.json();
		console.log(data);
	}
}

fetchBook(1);
