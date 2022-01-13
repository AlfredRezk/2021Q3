const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
// const cats = require('../data/cats.json');

module.exports = (req, res) => {
  // extract / parse pathname e.g '/cats'

  // https://www.mywebpage.com/test?q=search#help
  const pathname = url.parse(req.url).pathname;

  if (pathname === '/' && req.method === 'GET') {
    // Show homepage view
    let filePath = path.normalize(path.join(__dirname, '../views/home/index.html'))

    // Extract the url query 
    let { query } = url.parse(req.url, true)
    fs.readFile(filePath, (err, data) => { 
      if (err) { 
        console.log(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.write('404: cannot read File');
        res.end();
        return;
      }

      // Read the cats.json (db)
      fs.readFile('./data/cats.json', 'utf8', (err, catsData) => {
        // parse the cats
        catsData = JSON.parse(catsData);
        // transfer (map) => generate the markup HTML for every cat
        let catsMarkup;
          
        if (query.search) { 
          // search mode 
          catsData = catsData.filter(cat => cat.name.toLowerCase().includes(query.search.toLowerCase()))
          if (catsData.length === 0) { 
            catsMarkup = `<p> No cats found </p>`
            data = data.toString().replace('{{cats}}', catsMarkup)
            res.writeHead(200, { "Content-Type": "text/html" });
						res.write(data);
            res.end();
            return
          }
        }
        

        // loading cats
          catsMarkup= catsData.map(
          (cat) =>
            `
          <li>
					<img src="${`./content/images/${ cat.image }`}" alt="Black Cat" class="image-fluid">
					<h3>${cat.name}</h3>
					<p><span>Breed: </span>${cat.breed}</p>
					<p><span>Description: </span>${cat.description}</p>
					<ul class="buttons">
						<li class="btn edit"><a href="/cats/cats-edit/${cat.id}">Change Info</a></li>
						<li class="btn delete"><a href="/cats/cat-find-new-home/${cat.id}">New Home</a></li>
					</ul>
				</li>
		
          `
				);

				// update the data by replacing {{cats}} placeholder with the generated markup
				data = data.toString().replace("{{cats}}", catsMarkup.join("\n"));
				// serve data
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data);
				res.end();
			})
      

      
  
    })

  } else { 
    return true;
  }

}