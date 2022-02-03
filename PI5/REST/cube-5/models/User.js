const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, minLength: 5 }, 
  password: { type: String, required: true , minLength:8}, 
  email: { type: String, required: true, unique: true }, 
  resetToken: String, 
  resetTokenExpiration: Date
})

userSchema.pre("save", async function (next) { 
  this.password = await bcrypt.hash(this.password, 12)
})
module.exports = mongoose.model('User', userSchema);