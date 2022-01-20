const path = require('path');

const Note = require('../models/Note');

exports.getHome = async(req, res) => {
  const header = 'Welcome to the Notes App '
  const imageUrl = '/images/image.png';
  // Fetching notes form DB 
  const notes = await Note.find({});
  console.log(notes);
  res.render('home', {title:'Home', header, imageUrl, notes})
};

exports.getNotes = (req, res) => {
  res.render('index', { title: 'Add note' })
}
exports.postNotes = async(req, res) => {
  const note = new Note({text: req.body.note, imageUrl: req.body.imageUrl})
  await note.save();
  console.log(note.getCreatedAt())
  res.redirect("/");
};


exports.getDelete = (req, res) => { 

}

exports.getEdit = async (req, res) => { 

  let note = await Note.findById(req.params.noteId); 

   res.render("edit", { title: "Edit note" , text: note.text, imageUrl: note.imageUrl, _id: note.id.toString()});
}

exports.postEdit = async (req, res) => { 
  const id = req.params.noteId; 
  console.log(id)
  let note = await Note.findById(id);
  console.log(req.body)
  note.text = req.body.note; 
  note.imageUrl = req.body.imageUrl 
  await note.save();
  res.redirect('/')
}

