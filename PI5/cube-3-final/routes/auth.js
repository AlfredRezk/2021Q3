const express = require('express');
const router = express.Router();

const {
  getLogin,
  getRegister,
  postLogin,
  postRegister,
  getLogout, 
  getReset, 
  postReset, 
  getNewPassword, 
  postNewPassword
} = require('../controllers/authCtrl')

router.get('/login', getLogin)
router.post('/login', postLogin)
router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/logout', getLogout)
router.get('/reset', getReset)
router.post('/reset', postReset)
router.get('/reset/:token', getNewPassword)
router.post('/new-password', postNewPassword)

module.exports = router;