const express = require('express');
const router = express.Router();
const { getHome, getNotes, postNotes, getDelete, getEdit, postEdit}= require('./controllers/appCtrl')

router.get("/", getHome);
router.get("/delete/:noteId", getDelete);
router.get("/edit/:noteId", getEdit);
router.post("/edit/:noteId",postEdit);
router.get("/notes", getNotes);
router.post("/notes", postNotes);



module.exports = router;