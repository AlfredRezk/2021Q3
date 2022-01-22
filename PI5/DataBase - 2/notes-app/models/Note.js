const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  text: {
    type: String, 
    required: true, 
    maxLength: 200, 
    minLength: 5
  }, 
  createdAt: {
    type: Date, 
    default: Date.now
  }, 
  imageUrl: {
    type: String, 
    required:true
  }
})


noteSchema.methods.getCreatedAt = function () { 
  return this.createdAt
}

noteSchema.path('imageUrl').validate(function () { 
  let pattern = /^http(s)?\:\/\/.*/i;
  return pattern.test(this.imageUrl)
}, 'Must be a correct Url')

module.exports = mongoose.model('Note', noteSchema)