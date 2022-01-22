const path = require('path');

const Note = require('../models/Note');

exports.getHome = async (req, res) => {
 
  const header = "Welcome to the Notes App ";
	const imageUrl = "/images/image.png";
 	
  let notesImages =await Note.find({}).select('text')
  console.log(notesImages);
  // fetching all notes
   let  notes = await Note.find({});

  // check for queries
  if (req.query.search) {
    // search for specific notes
    const searchText = req.query.search.toLowerCase(); 
    notes = notes.filter(n=> n.text.toLowerCase().includes(searchText))
	}
  
    res.render('home', {title:'Home', header, imageUrl, notes})
};

exports.getNotes = (req, res) => {

  res.render('index', { title: 'Add note' })
}
exports.postNotes = async (req, res) => {
  
  // Using instant.save()
  // const note = new Note({text: req.body.note, imageUrl: req.body.imageUrl})
  // await note.save();
 
  // Using create()
  const note = { text: req.body.note, imageUrl: req.body.imageUrl }
  await Note.create(note);

  // console.log(note.getCreatedAt())
  res.redirect("/");
};


exports.postDelete = async(req, res) => { 
  const id = req.body.noteId
  // using findByIdAndRemove()
  // await Note.findByIdAndRemove(id);

  // Using remove() -- deprecated
  await Note.remove({ _id: id })
  //Note.deleteOne() 
  await Note.deleteOne({ _id: id })
  res.redirect('/');

}

exports.getEdit = async (req, res) => { 

  let note = await Note.findById(req.params.noteId); 

   res.render("edit", { title: "Edit note" , text: note.text, imageUrl: note.imageUrl, _id: note.id.toString()});
}

exports.postEdit = async (req, res) => { 
  const id = req.params.noteId; 
  let { note: text, imageUrl } = req.body;

  // Using findById() and save()
  let note = await Note.findById(id);
  note.text = text; 
  note.imageUrl = imageUrl 
  await note.save();


  // let note = await Note.findOne({ _id: id });
	// note.text = text;
	// note.imageUrl = imageUrl;
	// await note.save();
  
  // Using findByIdAndUpdate()
  // await Note.findByIdAndUpdate(id, { $set: {text, imageUrl}})
  
  // Using update()
  // await Note.update({ _id: id, $set: {text, imageUrl}})
  res.redirect('/')
}

