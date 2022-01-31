const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true, maxLength: 1000 }, 
  imageUrl: { type: String, required: true }, 
  level: { type: Number, required: true, min: 1, max: 6 }, 
  accessories: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref:'Accessory'
    }
  ], 
  creatorId: {type:String, required:true}
})

// Image Validation
// cubeSchema.path('imageUrl').validate(function () { 
//   let pattern = /^http(s)?\:\/\/.*/i;
//   return pattern.test(this.imageUrl)
// }, 'Must be a correct url')

module.exports = mongoose.model('Cube', cubeSchema);
