const express = require('express');
const router = express.Router();
const { getLogin, getRegister, postLogin, postRegister, getLogout} = require('../controllers/authCtrl')

router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/logout', getLogout)

module.exports = router;