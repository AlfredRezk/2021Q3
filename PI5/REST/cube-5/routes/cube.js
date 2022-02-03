const express = require('express');
const router = express.Router();
const { isAuth } = require('../middlewares/isAuth')

const {home, create, details, exportCSV, edit, deleteData ,save} = require('../controllers/cubeCtrl')

router.get('/', home)
router.post('/create', isAuth, create)
router.get('/details/:cubeId', details)
router.put('/edit/:cubeId', isAuth, edit)
router.delete('/delete/:cubeId', isAuth, deleteData)
router.get('/export', exportCSV)
router.get('/save/:cubeId', save)

module.exports = router;
