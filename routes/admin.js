const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));

router.use('/add-product',(req,res,next)=>{
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button>Submit</button></form>`);
});

router.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;