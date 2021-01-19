const express= require('express');
const rootDir = require('../util/path');
const path = require('path');
const router = express.Router();

const adminData = require('./admin')


router.get('/',(req, res, next)=>{
    const products = adminData.products;
    res.render('shop',
    {   prods: products, 
        pageTitle:"Shop",
         path: '/', 
         hasProducts: products.length>0,
         activeShop: true,
         productCSS: true,
        
        });
    // console.l og(adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
})

module.exports = router;