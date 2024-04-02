const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import controllers
const userController = require('./controllers/user.controller');
const authController = require('./controllers/auth.controller');

// Import routes
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
dotenv.config();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/api/user/test")
    .then(() => {
        console.log('Connected to MongoDB');
        // Start the server after successful MongoDB connection
        app.listen(3000, () => {
            console.log(`Server is running on port 3000!`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
const app = express();

app.get('/test', (req, res) => {
    res.json({ "users": ['user1','user2'] });
});

// Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
module.exports = app;

/*import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
//import userRouter from './routes/user.route.mjs';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
})
const app=express();
app.listen(3000,()=>{
    console.log('Server is running on port 3000!!!');

}
);



app.get('/test',(req,res)=>{
    res.json({
        message:'Hello',
    });
});

app.use('/api/auth',authRouter);

*/
