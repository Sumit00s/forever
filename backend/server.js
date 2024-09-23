const express = require('express');
const cors = require('cors');
require('dotenv').config();

//App Config
const app = express();
const port = process.env.PORT || 4002;

const connectDB = require('./config/mongodb.js');
connectDB();

const connectCloudinaary = require('./config/cloudinary.js');
connectCloudinaary();

//Middlewares
app.use(express.json());
app.use(cors());

//api endpoint
app.get('/',(req,res)=>{
    res.send("API WORKING");
})

const userRoutes = require('./routes/userRouter.js');
app.use('/api/user',userRoutes);

const productRoutes = require('./routes/productRoute.js');
app.use('/api/product',productRoutes);


//Listing on port
app.listen(port,()=>{
    console.log(`Server is Running on Port ${port}`);
})