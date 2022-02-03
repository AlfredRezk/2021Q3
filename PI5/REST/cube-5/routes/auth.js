const express = require('express');
const router = express.Router();
const {
  login,
  signup,
  resetPassword, 
  newPassword
} = require('../controllers/authCtrl')

const { loginValidation, signupValidation } = require("../validation/auth");

router.post( "/login", loginValidation(), login);
router.post('/signup', signupValidation(), signup)
router.post('/reset', resetPassword)
router.post('/new-password', newPassword)

module.exports = router;