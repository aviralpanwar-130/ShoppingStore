const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootdir = require('../util/path');

const router = express.Router();

const addProductController = require("../controllers/product.js");

router.use(bodyParser.urlencoded({extended:false}));

router.use('/add-product',addProductController.getAddProduct);

router.post('/product',addProductController.postAddProduct);

router.use('/fghj',addProductController.getProduct);

module.exports = router;