const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');

const getProductsFromFile = (cb)=>{
    const p = path.join(
        path.dirname(process.mainModule.filename),
        data,
        product.json
        );
    fs.readFile(p,(err,fileContent)=>{
        if(err)
        cb([]);
        cb(json.parse(fileContent));
    });
};

module.exports = class Products{
    constructor(t){
        this.title =t;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return products;
    }
}