
//Add Product Funciton
const addProduct = async(req,res) =>{
    try{
        const {name,description,price,category,subCategory,size,bestseller} = req.body;
        // const image1 = req.files.image1[0];
        // const image2 = req.files.image2[0];
        // const image3 = req.files.image3[0];
        // const image4 = req.files.image4[0];

        console.log(name,description,price,category,subCategory,size,bestseller);
        // console.log(image1,image2,image3,image4);

        res.json({
            success:true,
            message:'Product added successfully'
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

}

//Remove Product Funciton
const removeProduct = async(req,res) =>{

}

//Single Product Funciton
const singleProduct = async(req,res) =>{

}

module.exports = {addProduct,listProducts,removeProduct,singleProduct};