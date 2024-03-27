import express from 'express';
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


