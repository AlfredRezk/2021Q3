const express = require('express');
const router = express.Router();
const { getAbout, getHome, getCreate, postCreate, getDetails, getExport}= require('../controllers/cubeCtrl')

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/create', getCreate)
router.post('/create', postCreate)
router.get('/details/:cubeId', getDetails)
router.get('/export', getExport)

module.exports = router;
