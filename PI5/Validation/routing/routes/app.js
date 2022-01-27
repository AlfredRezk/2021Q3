const express = require('express');
const router = express.Router()
const { getHome, getAbout, getProducts, getAddProducts } = require('../controllers/appCtrl')

router.get("/", getHome);
router.get("/about", getAbout);
router.get("/products", getProducts);
router.get("/add-product", getAddProducts);

module.exports = router;