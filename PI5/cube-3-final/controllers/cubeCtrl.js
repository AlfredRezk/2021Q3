const fs = require('fs')
const Cube = require('../models/Cube');
const { parse } = require('json2csv');

let options = [
  {level: 1, desc: '1 - Very Easy', selected:false}, 
  {level: 2, desc: '2 - Easy', selected:false}, 
  {level: 3, desc: '3 - Medium', selected:false}, 
  {level: 4, desc: '4 - Intermediate', selected:false}, 
  {level: 5, desc: '5 - Hard', selected:false}, 
  {level: 6, desc: '6 - Hardcore', selected:false}, 
]

exports.getHome = async(req, res) => {
  // Fetching cubes from DB
  let cubes = await Cube.find({})
  // const cubesCopy = [...cubes];

  // search
  if (req.query.search) { 
    cubes = cubes.filter(cube => cube.name.toLowerCase().includes(req.query.search.toLowerCase()))
  }

  if (req.query.from) { 
    cubes = cubes.filter(cube => cube.level >= req.query.from)
  }

  if (req.query.to) { 
    cubes = cubes.filter((cube) => cube.level <= req.query.to);
  }
    
  res.render("index.hbs", {cubes, title:'Home Page'});
};

exports.getAbout = (req, res) => {
  res.render("about.hbs", {title:'About Page'});
};

exports.getCreate = (req, res) => {
  res.render("create.hbs", {options, title:'Create Cube'});
};

exports.postCreate = async (req, res) => { 
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const cube = new Cube({ name, description, imageUrl, level: difficultyLevel, creatorId: req.user._id });
  await cube.save()
  res.redirect('/')
}

exports.getDetails = async(req, res) => { 
  // parse the cube id from the url 
  const id = req.params.cubeId
  // Search database for the cube 
  const cube = await Cube.findById(id).populate('accessories')
  console.log(cube);

  // Authorization 
  let owner = false; 
  // if a user is logged in 
  if (req.user) { 
    owner = req.user._id.toString() === cube.creatorId
  }

  if (cube) { 
    res.render('details', {title:`Detail | ${id}`, cube, accessories: cube.accessories, owner})
  }
}

exports.getExport = async (req, res) => {

  // fetch all cubes from db
  const cubes = await Cube.find({})
  const fields = ['name', 'description', 'imageUrl', 'level'];
  const csv = parse(cubes, { fields: fields })
  res.attachment('List.csv')
  res.status(200).send(csv)

}

exports.getEdit = async(req, res) => { 

  // parse the id from the url 
  const cubeId = req.params.cubeId;

  // fetch the cube info 
  const cube = await Cube.findById(cubeId);

  // set all selection to false 
  options = options.map(opt => ({ ...opt, selected: false }))
  // get the index of the cube level
  let index = options.findIndex(opt => opt.level === cube.level)
  options[index].selected = true;
  
  res.render('create.hbs', {title:'Edit cube', cube:cube, editMode: true, options})

}

exports.postEdit = async (req, res) => { 
  // parse the url for cube id 
  const cubeId = req.params.cubeId;
  // search my db for that specific cube 
  const cube = await Cube.findById(cubeId);
  // Update the cube with the form fields
  cube.name = req.body.name;
  cube.description = req.body.description;
  cube.level = req.body.difficultyLevel; 
  cube.imageUrl = req.body.imageUrl;

  // save it back to the db
  await cube.save();
  // send a message to the user and redirect him to the home page 
  req.flash('success', 'Cube edited successfully !');
  res.redirect('/');
}

exports.getDelete = async (req, res) => {
	//  parse the cube id from url
	const cubeId = req.params.cubeId;

	// find the cube in db by id
	const cube = await Cube.findById(cubeId);
	
  // set all selection to false
	options = options.map((opt) => ({ ...opt, selected: false }));
	// get the index of the cube level
	let index = options.findIndex((opt) => opt.level === cube.level);
  options[index].selected = true;
  
	res.render("delete", { title: "Delete Page", cube, options });
}

exports.postDelete = async (req, res) => { 
  const cubeId = req.params.cubeId;

  await Cube.findByIdAndDelete(cubeId)
  req.flash('success', 'Cube deleted Successfully !');
  res.redirect('/')
}