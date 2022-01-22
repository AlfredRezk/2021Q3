const fs = require('fs')
const Cube = require('../models/Cube');


const options = [
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
  const cube = new Cube({ name, description, imageUrl, level: difficultyLevel });
  await cube.save()
  res.redirect('/')
  
}

exports.getDetails = async(req, res) => { 
  // parse the cube id from the url 
  const id = req.params.cubeId
  // Search database for the cube 
  const cube = await Cube.findById(id).populate('accessories')
  console.log(cube);

  if (cube) { 
    res.render('details', {title:`Detail | ${id}`, cube, accessories: cube.accessories})
  }
}