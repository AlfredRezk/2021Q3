const fs = require('fs')
const Cube = require('../models/Cube');
const { parse } = require('json2csv');
const asyncHandler = require("express-async-handler");
const deleteFile = require('../utils/delete');
const path = require('path');
const pdfDocument = require('pdfkit')

let options = [
  {level: 1, desc: '1 - Very Easy', selected:false}, 
  {level: 2, desc: '2 - Easy', selected:false}, 
  {level: 3, desc: '3 - Medium', selected:false}, 
  {level: 4, desc: '4 - Intermediate', selected:false}, 
  {level: 5, desc: '5 - Hard', selected:false}, 
  {level: 6, desc: '6 - Hardcore', selected:false}, 
]

exports.getHome = asyncHandler(async(req, res, next) => {
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
})

exports.getAbout = (req, res) => {
  res.render("about.hbs", {title:'About Page'});
};

exports.getCreate = (req, res) => {
  res.render("create.hbs", {options, title:'Create Cube'});
};

exports.postCreate = asyncHandler(async (req, res, next) => { 
  const { name, description, difficultyLevel } = req.body;

  const imageUrl = req.file.path;
  const cube = new Cube({ name, description, imageUrl, level: difficultyLevel, creatorId: req.user._id });
  await cube.save()
  res.redirect('/')
})

exports.getDetails = asyncHandler(async(req, res, next) => { 
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
})

exports.getExport = asyncHandler(async (req, res, next) => {

  // fetch all cubes from db
  const cubes = await Cube.find({})
  const fields = ['name', 'description', 'imageUrl', 'level'];
  const csv = parse(cubes, { fields: fields })
  res.attachment('List.csv')
  res.status(200).send(csv)

})

exports.getEdit = asyncHandler(async(req, res, next) => { 

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

})

exports.postEdit = asyncHandler(async (req, res, next) => { 
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
})

exports.getDelete = asyncHandler(async (req, res, next) => {
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
})

exports.postDelete = asyncHandler(async (req, res, next) => { 
  const cubeId = req.params.cubeId;

  const cube = await Cube.findById(cubeId);
  deleteFile(cube.imageUrl);

  await Cube.findByIdAndDelete(cubeId)
  req.flash('success', 'Cube deleted Successfully !');
  res.redirect('/')
})

exports.getSave = asyncHandler(async (req, res, next) => { 

  const cubeId = req.params.cubeId;
  const cube = await Cube.findById(cubeId);

  if (!cube) { 
    return next(new Error('No cube Found'))
  }

  // set the filename and path 
  const cubeName = 'Cube' + cubeId + '.pdf';
  const cubePath = path.join('data', cubeName);

  // Create a pdf document
  const pdfDoc = new pdfDocument();

  // set response headers 
  res.setHeader('Content-Type', 'application/pdf')
  res.setHeader('Content-Disposition', `inline; filename=${cubeName}`)
  
  pdfDoc.pipe(fs.createWriteStream(cubePath));

  pdfDoc.font('Times-Bold').fontSize(24).fillColor('blue').text(cube.name, { align: 'center' })
  pdfDoc.font('Times-Roman').fontSize(14).fillColor('black');
  pdfDoc.moveDown()
  pdfDoc.image(cube.imageUrl, 200, 100, { width: 200 })
  pdfDoc.moveDown();
  pdfDoc.font('Times-Bold').fontSize(14).text('Description :', 20, 300, { continued: true }).font('Times-Roman').text(cube.description)
  pdfDoc.moveDown();
  pdfDoc
		.font("Times-Bold")
		.fontSize(14)
		.text("Level :", { continued: true })
		.font("Times-Roman")
		.text(cube.level);

  // close the file and pipe the file to the res 
  pdfDoc.end();
  pdfDoc.pipe(res);

})