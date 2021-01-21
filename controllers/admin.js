
exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
     { pageTitle: 'Add Product', 
     path: '/admin/add-product',
     formCSS: true,
     productCSS:true,
     activeAddProduct: true, 
  });
  };


  exports.getAdminProduct = (req, res, next) => {
    res.render('admin/products',
    { pageTitle: 'Admin Products',
      path: '/admin/products',
   } );
  };