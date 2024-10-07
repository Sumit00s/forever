const cloudinary = require('cloudinary').v2
const productModel = require('../models/productModel');
const Product = require('../models/productModel');

//Add Product Funciton
const addProduct = async(req,res) =>{
    try{
        const {name,description,price,category,subCategory,sizes,bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];

        const images = [image1,image2,image3,image4].filter((item) =>item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})
                return result.secure_url;
            })
        )

        const productData = await Product.create({
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            bestseller:bestseller == "true"?true:false,
            image:imagesUrl,
            date:Date.now()
        })

        res.json({
            success:true,
            message:'Product added successfully',
            product:productData
        })
    }
    catch(error){
        console.log(error);
        res.json({
            success:false,
            error:error.message
        })
    }
}

//List Product Funciton
const listProducts = async(req,res) =>{
    try{
        const products = await productModel.find({});
        return res.json({
            success:true,
            products
        })
    }
    catch(error){
        console.log("Error Occur in List Product Route",error);
        return res.json("Error Occur in List Product Route");
    }
}

//Remove Product Funciton
const removeProduct = async(req,res) =>{
    try{
        await productModel.findByIdAndDelete(req.body.id);
        return res.json({
            success:true,
            message:'Product removed successfully'
        })
    }
    catch(error){
        console.log("Error Occur in Remove Product Route",error.message);
        return res.json({
            success:false,
            message:error.message
        });
    } 
}

//Single Product Funciton
const singleProduct = async(req,res) =>{
    try{
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        return res.json({
            success:true,
            product
        })
    }
    catch(error){
        console.log("Error Occur in Single Product Controller",error.message);
        return res.json({
            success:false,
            message:error.message
        });
    }
}

module.exports = {addProduct,listProducts,removeProduct,singleProduct};