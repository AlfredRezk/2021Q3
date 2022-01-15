const path = require('path');

const notes = [];

exports.getHome = (req, res) => {
  const header = 'Welcome to the Notes App '
  const imageUrl = '/images/image.png'
  res.render('home', {title:'Home', header, imageUrl, notes})
};

exports.getNotes = (req, res) => {
  res.render('index', { title: 'Add note' })
}
exports.postNotes = (req, res) => {
  notes.push(req.body.note)
	res.redirect("/");
};

