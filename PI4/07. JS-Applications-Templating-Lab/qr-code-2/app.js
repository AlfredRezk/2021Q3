/** @format */

const colors = [
	{ Red: "255-0-0" },
	{ Green: "0-255-0" },
	{ Blue: "0-0-255" },
	{ Black: "0-0-0" },
	{ White: "255-255-255" },
];

const formats = ["png", "gif", "jpeg", "jpg", "svg", "eps"];
const inputText = document.getElementById("input-text");
const width = document.getElementById("width");
const height = document.getElementById("height");
const bgColor = document.getElementById("bg-color");
const textColor = document.getElementById("text-color");
const formatInput = document.getElementById("format-input");

document.getElementById('form').addEventListener('submit', main)

let imageUrl;

async function main(e) {
	e.preventDefault();
	const url = `http://api.qrserver.com/v1/create-qr-code/?data=${inputText.value}&size=${width.value}x${height.value}&color=${textColor.value}&bgcolor=${bgColor.value}&format=${formatInput.value}`;

	let res = await fetch(url);
	let data = await res.blob();

	imageUrl = URL.createObjectURL(data);

	// hide the form section and show the output section
	document.getElementById("output").style.display = "block";
	document.getElementById("input-form").style.display = "none";
	document.getElementById("image").src = imageUrl;
}


function DOMUI() {

  // hide the output section and show the form section 
  document.getElementById('output').style.display = 'none';
  document.getElementById('input-form').style.display = 'block';

	document.addEventListener("DOMContentLoaded", function () {
		let elems = document.querySelectorAll("select");

		colors.forEach((color) => {
			bgColor.innerHTML += `<option value=${Object.values(color)[0]}>
        ${Object.keys(color)[0]}
      </option>`;
		});

		textColor.innerHTML = bgColor.innerHTML;

		formats.forEach((format) => {
			formatInput.innerHTML += `<option value=${format}> ${format}</option>`;
		});

		let instances = M.FormSelect.init(elems, {});
	});
}

function downloadImage() { 
  const link = document.getElementById('download-btn');
  link.setAttribute('href', imageUrl)
  link.setAttribute('download',  `qr-code.${formatInput.value}` )
}

DOMUI();
