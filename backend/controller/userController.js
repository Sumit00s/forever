const User = require('../models/userModel.js')
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//create JWT TOEKN
const creteToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

//Login Route
const loginUser = async(req,res)=>{
    try{
        const {email,password} = req.body;

        const user_checking = await User.findOne({email});
        if(!user_checking){
            return res.json({
                success:false,
                message:"User not found"
            })
        }

        const is_match = await bcrypt.compare(password,user_checking.password);
        if(!is_match){
            return res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const token = creteToken(user_checking._id);

        res.json({
            success:true,
            message:"User Login Successfuly", 
            token
        })
    }
    catch(error){
        console.log("Error Occur In Login Controller : ",error);
        res.json({
            success:false,
            error:error.message
        })
    }
}


//Sign-Up Route
const registerUser = async(req,res)=>{
    try{
        //taking out data from request
        const {name,email,password} = req.body;
        
        //checking if user already exists
        const exists = await User.findOne({email});
        if(exists){
            return res.json({
                success:false,
                message:"User already exists"
            })
        }

        //validating email format ans strong password
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter valid email ."
            })
        }

        if(password.length<8){
            return res.json({
                success:false,
                message:"Password must be atleast 8 characters"
            })
        }

        //Hasshing User Password;
        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            name,
            email,
            password:hashedPassword
        });

        const token = creteToken(newUser._id); 

        res.json({
            success:true,
            token
        })

    }
    catch(error){
        console.log('Error Occur in Register User Route',error);
        res.json({
            success:false,
            error:error.message
        })
    }
}

//Admin Login Route
const adminLogin = async(req,res)=>{
    try{
        const {email,password} = req.body;
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
              const token = jwt.sign(email+password,process.env.JWT_SECRET);
              res.json({
                success:true,
                token
              })
        } 
        else{
            res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }
            
    }
    catch(error){
        console.log("Error Occur In Admin Login Controller : ",error.message);
        res.json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {loginUser,registerUser,adminLogin};