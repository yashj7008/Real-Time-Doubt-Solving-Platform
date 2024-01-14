import express from "express";
import userRoutes from './routes/user.routes.js'
import tutorRoutes from './routes/tutor.routes.js'
import connectToDatabase from './config/dbConfig.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());


app.use("/api/user", userRoutes);
app.use("/api/tutor", tutorRoutes);


app.all("*",(req,res)=>{
  res.status(400).send("Page not found !");
})

app.listen(5050, async()=>{
  await connectToDatabase();
  console.log(`The server is running on http://localhost:5050`)
})