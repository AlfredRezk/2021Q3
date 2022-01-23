const express = require('express');
const router = express.Router();
const { isAuth} = require('../middlewares/isAuth')
const { getAbout, getHome, getCreate, postCreate, getDetails, getExport}= require('../controllers/cubeCtrl')

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/create', isAuth, getCreate)
router.post('/create', isAuth, postCreate)
router.get('/details/:cubeId', getDetails)
router.get('/export', getExport)

module.exports = router;
