function main(arr) {
	// get the first item in array
	let first = Number(arr.shift());
	// get the last item in array
  let last = Number(arr.pop());
  console.log(first+last)
}

main(["20", "30", "40"]);