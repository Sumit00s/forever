const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');

const {addProduct,listProducts,removeProduct,singleProduct}  = require('../controller/productController');
const {adminAuth} = require('../middleware/adminAuth');

router.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
router.get('/list',listProducts);
router.delete('/remove',removeProduct);
router.get('/single',singleProduct);

module.exports = router;