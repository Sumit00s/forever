const mongoose = require('mongoose');

const connectDB = async()=>{

    mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
    });

    await mongoose.connect(`${process.env.MONGODB_URL}`).then(() => {
    console.log('Connected to MongoDB');}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    });

}

module.exports = connectDB;