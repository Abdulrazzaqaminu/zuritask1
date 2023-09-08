import express from "express";
import getRouter from "./Routes/getReq"
import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(express.json());

app.use("/api", getRouter);

app.listen(PORT);