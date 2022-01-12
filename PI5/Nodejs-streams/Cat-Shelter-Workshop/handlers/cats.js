const url = require("url");
const fs = require("fs");
const path = require("path");
const formidable = require("formidable");
const cats = require("../data/cats.json");
const breeds = require("../data/breeds.json");

module.exports = (req, res) => {
	const pathname = url.parse(req.url).pathname;
	console.log(pathname);

	if (pathname === "/cats/add-cat" && req.method === "GET") {
		// LOAD THE ADD FORM
		let filePath = path.normalize(path.join(__dirname, "../views/addCat.html"));
		const index = fs.createReadStream(filePath);

		// reading chunks of bytes
    index.on("data", (data) => {
      
      // generate option elements for every breed 
      let catBreedPlaceholder = breeds.map(breed => `<option value="${breed}">${breed}</option>`).join('\n')
      console.log(catBreedPlaceholder)
      let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);
			res.write(modifiedData);
		});
		// done reading the file end the res stream
		index.on("end", () => {
			res.end();
    });
    // Incase of errors 
		index.on("err", (err) => {
			console.log(err);
		});
	} else if (pathname === "/cats/add-breed" && req.method === "GET") {
		//LOAD THE BREED FORM
		let filePath = path.normalize(path.join(__dirname, "../views/addBreed.html"));
		const index = fs.createReadStream(filePath);
    index.pipe(res);
  } else if (pathname === '/cats/add-breed' && req.method === 'POST') { 

    // parse the form for its fields
    let form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
			if (err) throw err;
			// push the new breed to the breeds array
      breeds.push(fields.breed);
      let breedsJson = JSON.stringify(breeds)
			// write the updated array to the breeds.json
			fs.writeFile("./data/breeds.json", breedsJson, "utf8", () => {
				console.log("The breed was added successfully");
			});
			// redirect the user to home page
      res.writeHead(301, { 'Location': '/' })
      res.end();

		})
   
    
  }
  
  else {
		return true;
	}
};
