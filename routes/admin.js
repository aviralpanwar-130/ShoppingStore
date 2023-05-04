const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const rootdir = require('../util/path');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));

router.use('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','addProduct.html'));
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;