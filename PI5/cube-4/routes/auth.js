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

const { loginValidation, signupValidation } = require("../validation/auth");

router.get('/login', getLogin)
router.post( "/login", loginValidation(), postLogin);
router.get('/register', getRegister)
router.post('/register', signupValidation(), postRegister)
router.get('/logout', getLogout)
router.get('/reset', getReset)
router.post('/reset', postReset)
router.get('/reset/:token', getNewPassword)
router.post('/new-password', postNewPassword)

module.exports = router;