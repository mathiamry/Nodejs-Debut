const { fetchAll } = require('../models/product');
const Product = require('../models/product')


exports.getProducts =(req, res, next)=>{
    products = Product.fetchAll((products)=>{
    res.render('shop/product-list',
    {   prods: products, 
        pageTitle:"Shop",
         path: '/shop/product-list', 
         hasProducts: products.length>0,
         activeShop: true,
         productCSS: true,
        
        });
      });
    };


exports.postAddProduct = (req, res, next) => {
    product = new Product(req.body.title);
    product.save();
    res.redirect('/');
    };


exports.getCart = (req, res, next) => {
    res.render('shop/cart',
    { pageTitle: 'Cart', 
    path: '/cart',
    
    });
    };


exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',
    { pageTitle: 'Checkout', 
    path: '/checkout',
    
    });
    };