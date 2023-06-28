const Product = require('../models/product');

const rootdir = require('../util/path');
const path = require('path');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','addProduct.html'));
}

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProduct = (req,res,next)=>{
    Product.fetchAll();
    res.redirect('/');
}