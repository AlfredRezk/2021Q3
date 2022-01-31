const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/isAuth')


const { getAbout, getHome, getCreate,
  postCreate, getDetails, getExport, getEdit,
  postEdit, getDelete, postDelete, 
  getSave
} = require('../controllers/cubeCtrl')

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/create', isAuth, getCreate)
router.post('/create', isAuth, postCreate)
router.get('/details/:cubeId', getDetails)
router.get('/edit/:cubeId', isAuth, getEdit)
router.post('/edit/:cubeId', isAuth, postEdit)
router.get('/delete/:cubeId', isAuth, getDelete)
router.post('/delete/:cubeId', isAuth, postDelete)
router.get('/export', getExport)
router.get('/save/:cubeId', getSave)

module.exports = router;
