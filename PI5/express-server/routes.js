const express = require('express');
const router = express.Router();
const { getHome, getNotes, postNotes}= require('./controllers/appCtrl')

router.get("/", getHome);
router.get("/notes", getNotes);
router.post("/notes", postNotes);



module.exports = router;