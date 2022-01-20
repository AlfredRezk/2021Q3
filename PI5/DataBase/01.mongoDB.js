// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient;
// const dbUrl = 'mongodb://localhost:27017'

// const client = new MongoClient(dbUrl)

// client.connect((err) => { 
//   if (err) throw err
//   // Create a database 
//   const db = client.db('testdb')

//   // Create a collection 
//   const people = db.collection('people')

//   // Insert a document inside the collection 
//   people.insert({ 'name': 'john' }, (err, result) => { 
//       // Send a query to find a user with name Ivan
//     people.find({ name: 'john' }).toArray((err, data) => { 
//       console.log(data)
//     })

//   })
// })
const {MongoClient} = require('mongodb')
const dbUrl = 'mongodb://localhost:27017'

const client = new MongoClient(dbUrl)

// Connecting to Data-base 
const connect = async () => { 
  await client.connect()
}

const add = async (data) => {
	// Create a DB
	const db = client.db("kingsland");
	// Create a collection
  const people = db.collection("people");
  // Insert a document 
  await people.insert(data)
  let result = await people.find().toArray()
  console.log(result)
}

// Run 
connect()
add({name:'John'})

