import express from "express";
import getRouter from "./Routes/getReq"
import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
const PORT: string = process.env.PORT!

app.use(express.json());

app.use("/api", getRouter);

app.listen(PORT);