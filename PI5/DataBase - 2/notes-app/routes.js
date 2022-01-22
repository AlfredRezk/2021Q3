const express = require('express');
const router = express.Router();
const { getHome, getNotes, postNotes, postDelete, getEdit, postEdit}= require('./controllers/appCtrl')

router.get("/", getHome);
router.post("/delete", postDelete);
router.get("/edit/:noteId", getEdit);
router.post("/edit/:noteId",postEdit);
router.get("/notes", getNotes);
router.post("/notes", postNotes);



module.exports = router;