const express = require('express');
const router = express.Router();

const { getCreate, postCreate, getAttach, postAttach } = require('../controllers/accessoryCtrl');

router.get('/create/accessory', getCreate);
router.post('/create/accessory', postCreate);
router.get('/attach/accessory/:cubeId', getAttach)
router.post('/attach/accessory/:cubeId', postAttach)

module.exports = router