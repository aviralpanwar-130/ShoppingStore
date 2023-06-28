const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'product.json'
    );



const getProductsFromFile = (cb)=>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err)
        return cb([]);
        const pr = JSON.parse(fileContent);
        cb(pr);
    });
};

module.exports = class Products{
    constructor(t){
        this.title =t;
    }

    save(){
        getProductsFromFile((products)=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })
        })
        
    }

    static fetchAll(cb){
        getProductsFromFile(cb);
    }
}