const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const connectCloudinaary = async () =>{
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRECT 
    });
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:26749945.
module.exports = connectCloudinaary;