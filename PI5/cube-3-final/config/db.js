const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => { 
  const conn = await mongoose.connect(process.env.MONGO_URL);
  console.log(`MongoDB Connected ${conn.connection.host}`.green.underline)
}

module.exports = connectDB;
