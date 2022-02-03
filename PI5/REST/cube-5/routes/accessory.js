const express = require('express');
const router = express.Router();
const {isAuth} = require('../middlewares/isAuth')

const { getCreate, postCreate, getAttach, postAttach } = require('../controllers/accessoryCtrl');

router.get('/create/accessory', isAuth, getCreate);
router.post('/create/accessory', isAuth, postCreate);
router.get('/attach/accessory/:cubeId', isAuth, getAttach)
router.post('/attach/accessory/:cubeId', isAuth, postAttach)

module.exports = router