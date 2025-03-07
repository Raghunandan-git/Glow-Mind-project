import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './source/config/db.js'
dotenv.config();
connectDB();
const app=express();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running at port ${PORT}`));