const cubes = require('../db/database.json');
const fs = require('fs');
const uniqid = require('uniqid');

class Cube { 
  constructor(name, description, imageUrl, level) { 
    this.id = uniqid();
    this.name = name; 
    this.description = description; 
    this.imageUrl = imageUrl; 
    this.level = level
  }

  save() { 
    return new Promise((resolve, reject) => { 
      cubes.push(this)
      fs.writeFile('./db/database.json', JSON.stringify(cubes), (err) => { 
        if (err) reject(err);
        resolve('Cube Added Successfully !!')
      })

    })
  }


  static findById(id) { 
    const cube = cubes.find(c => c.id === id)
    return cube;
  }
}

module.exports = Cube;


