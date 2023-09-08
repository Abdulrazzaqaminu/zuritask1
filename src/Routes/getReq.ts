import express from "express";
import { getRequests } from "../Controllers/getReq";

const router = express.Router();

router.get("/", getRequests);

export default router