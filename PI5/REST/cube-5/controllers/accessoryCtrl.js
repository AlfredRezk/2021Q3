const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
const asyncHandler = require("express-async-handler");

exports.getCreate = (req, res) => { 
  res.render('createAccessory.hbs', { title: 'Create Accessory' });
}


exports.postCreate = asyncHandler(async (req, res, next) => { 
  const { name, description} = req.body
  // create a new Accessory and store in DB
  const imageUrl = req.file.path;
  const accessory = new Accessory({ name, description, imageUrl })
  await accessory.save()
  res.redirect('/')
})

exports.getAttach = asyncHandler(async(req, res, next) => { 
  const cube = await Cube.findById(req.params.cubeId).populate('accessories');

  const accessories = await Accessory.find({}).where('_id').nin(cube.accessories)

  res.render('attachAccessory.hbs', {cube, accessories})
})

exports.postAttach = asyncHandler(async (req, res, next) => { 

  // Find the cube we want to attach the accessory to it 
  const cube = await Cube.findById(req.params.cubeId)
  // get its accessories - add the new accessory to them 
  cube.accessories.push(req.body.accessory)
  // save to db 
  cube.save();


  let accessory = await Accessory.findById(req.body.accessory);
  accessory.cubes.push(req.params.cubeId);
  accessory.save();

  // redirect the user to the details page 
  res.redirect(`/details/${req.params.cubeId}`)
})