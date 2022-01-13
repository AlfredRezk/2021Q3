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
   
    
  } else if (pathname === '/cats/add-cat' && req.method === 'POST') {
    // parse the form for its fields
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {

      let filename;
      if (err) throw err;
      // if the user uploaded an image => get the image name
      if (files.upload.originalFilename) {
        // get the old path
        let oldPath = files.upload.filepath;
        // new path 
        let newPath = path.normalize(path.join(__dirname, '../content/images/' + files.upload.originalFilename))
        // rename the file
        fs.renameSync(oldPath, newPath)
        filename = files.upload.originalFilename;

        // else => set the image name no-image.png
      } else {
        filename = 'no-image.png'
      }
    
      cats.push({ id: Date.now(), ...fields, image: filename })
      // // update the cats.json content with the new cats array
      let catJson = JSON.stringify(cats);
      fs.writeFile('./data/cats.json', catJson, () => {
        res.writeHead(301, { location: '/' })
        res.end();
      })
      
    })
  } else if (pathname.includes('/cats/cats-edit') && req.method === 'GET') {
    // parse cat id 
    const urlArr = pathname.split('/');   //['cats', '/edit', '1235656546']
    const catId = urlArr[urlArr.length - 1];

    // path to the editCat.html
    let filePath = path.normalize(path.join(__dirname, '../views/editCat.html'));

    // get the info about the current cat 
    let currentCat = cats.find(c => c.id == catId)

    // Read the editCat.html by fs.createReadStream
    const index = fs.createReadStream(filePath);

    index.on('data', (data) => {

      let modifiedData = data.toString().replace('{{id}}', catId);
      modifiedData = modifiedData.replace('{{name}}', currentCat.name);
      modifiedData = modifiedData.replace('{{description}}', currentCat.description)

      const breedsOptions = breeds.map(breed => {
        if (breed === currentCat.breed) {
          return `<option value="${breed}" selected>${breed}</option> `
        } else {
          return `<option value="${breed}">${breed}</option> `;
        }
      })

      modifiedData = modifiedData.replace('{{catBreeds}}', breedsOptions.join('\n'));
      res.write(modifiedData)
    })

    index.on('end', () => { res.end() })



  } else if (pathname.includes('/cats/cats-edit') && req.method === 'POST') {
    // parse cat id
    const urlArr = pathname.split("/"); //['cats', '/edit', '1235656546']
    const catId = urlArr[urlArr.length - 1];

    // get current cat

    let currentCat = cats.find((c) => c.id == catId);
    
    // Parse the form
    let form = new formidable.IncomingForm();
    let filename;
    form.parse(req, (err, fields, files) => {
      if (err) throw err;
      if (files.upload.originalFilename) {
        let oldPath = files.upload.filepath;
        let newPath = path.normalize(path.join(__dirname, '../content/images/' + files.upload.originalFilename))
        fs.renameSync(oldPath, newPath)
        filename = files.upload.originalFilename

      } else {
        filename = currentCat.image;
      }

      // update the cats array with the information user entered in the form 
      let allCats = cats.filter(cat => cat.id != catId)
      allCats.push({ id: currentCat.id, ...fields, image: filename })
      // update the db cats.json 
      allCats = JSON.stringify(allCats);
      fs.writeFile('./data/cats.json', allCats, () => {
        res.writeHead(301, { location: "/" });
        res.end();
      })
    });
  } else if (pathname.includes('/cats/cat-find-new-home') && req.method === 'GET') {

    // load the catShelter.html and populate it with the cat info
    // parse cat id
    const urlArr = pathname.split("/"); //['cats', '/edit', '1235656546']
    const catId = urlArr[urlArr.length - 1];
    let filePath = path.normalize(path.join(__dirname, '../views/catShelter.html'))
    // get the info of the cat 
    let currentCat = cats.find(c => c.id == catId);
    if (currentCat) {
      const index = fs.createReadStream(filePath);

      index.on('data', (data) => {
        let modifiedData = data.toString().replace('{{id}}', catId);
        modifiedData = modifiedData.replace('{{name}}', currentCat.name);
        modifiedData = modifiedData.replace('{{description}}', currentCat.description);
        modifiedData = modifiedData.replace('{{image}}', '/content/images/' + currentCat.image);
        modifiedData = modifiedData.replace('{{breed}}', currentCat.breed);
        res.write(modifiedData)
      })

      index.on('end', () => { res.end() })
    }


  } else if (pathname.includes('/cats/cat-find-new-home') && req.method === 'POST') {
		// parse cat id
		const urlArr = pathname.split("/"); //['cats', '/edit', '1235656546']
    const catId = urlArr[urlArr.length - 1];
    
    fs.readFile('./data/cats.json', 'utf8', (err, cats) => { 
      if (err) throw err;

      cats = JSON.parse(cats);
      let  updatedCates = cats.filter(cat => cat.id != catId);
      updatedCates = JSON.stringify(updatedCates);
      // write it back to the file
      fs.writeFile('./data/cats.json', updatedCates, () => { 
        res.writeHead(301, { location: '/' })
        res.end()
      })

    })
	}
    
  else {
		return true;
	}
};
