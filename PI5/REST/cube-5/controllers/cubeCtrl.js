const fs = require('fs')
const Cube = require('../models/Cube');
const { parse } = require('json2csv');
const asyncHandler = require("express-async-handler");
const deleteFile = require('../utils/delete');
const path = require('path');
const pdfDocument = require('pdfkit')


exports.home = asyncHandler(async(req, res, next) => {
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
    
  res.status(200).json(cubes);
})

exports.create = asyncHandler(async (req, res, next) => { 
  const { name, description, difficultyLevel } = req.body;

  let imageUrl = { path: 'images/no-image.jpg' };
  let image = req.file;
  if (image) { 
    imageUrl = image
  }


  const cube = new Cube({ name, description, imageUrl: imageUrl.path, level: difficultyLevel, creatorId: req.userId });
  const savedCube = await cube.save()
  res.status(201).json({message: 'Cube added !', data: savedCube})
})

exports.details = asyncHandler(async(req, res, next) => { 
  // parse the cube id from the url 
  const id = req.params.cubeId
  // Search database for the cube 
  const cube = await Cube.findById(id).populate('accessories')

  if (cube) { 
    res.status(200).json({cube:cube})
  }
})

exports.exportCSV = asyncHandler(async (req, res, next) => {

  // fetch all cubes from db
  const cubes = await Cube.find({})
  const fields = ['name', 'description', 'imageUrl', 'level'];
  const csv = parse(cubes, { fields: fields })
  res.attachment('List.csv')
  res.status(200).send(csv)

})


exports.edit = asyncHandler(async (req, res, next) => { 
  // parse the url for cube id 
  const cubeId = req.params.cubeId;
  // search my db for that specific cube 
  const cube = await Cube.findById(cubeId);
  // Update the cube with the form fields
  cube.name = req.body.name;
  cube.description = req.body.description;
  cube.level = req.body.difficultyLevel; 
  cube.imageUrl = req.body.imageUrl;

  // Authorization 
  let owner = false; 
  if (req.userId) { 
    owner = req.userId === cube.creatorId
  }

  if (!owner) { 
    	 const error = new Error("Not Authorized ");
				error.statusCode = 401;
				throw error; 
  }

  // save it back to the db
  const updatedCube = await cube.save();
  res.status(200).json({message:'Cube Updated', cube: updatedCube})
})



exports.deleteData= asyncHandler(async (req, res, next) => {
	const cubeId = req.params.cubeId;

	const cube = await Cube.findById(cubeId);

	// Authorization
	let owner = false;
	if (req.userId) {
		owner = req.userId === cube.creatorId;
	}

	if (!owner) {
		const error = new Error("Not Authorized ");
		error.statusCode = 401;
		throw error;
  }
  
	deleteFile(cube.imageUrl);

  await Cube.findByIdAndDelete(cubeId);
  res.status(200).json({message:'Cube deleted'})
})

exports.save = asyncHandler(async (req, res, next) => { 

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