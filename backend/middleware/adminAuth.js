const jwt = require('jsonwebtoken');

const adminAuth = async(req,res,next) =>{
    try{
        const {token} = req.headers;
        if(!token){
            return res.json({
                success:false,
                message:"Token Not Found"
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(decoded !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({
                success:false,
                message:"Not Authorized Login Again"
            })
        }

        next();  
    }
    catch(error){
        console.log("Error Occur In Admin Auhh Middleware",error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports = adminAuth;