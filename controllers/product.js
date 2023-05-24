const rootdir = require('../util/path');
const path = require('path');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','addProduct.html'));
}

exports.getProduct = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/add-product');
}