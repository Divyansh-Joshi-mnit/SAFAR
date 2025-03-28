import express from "express";
import { imgUpload, uploadMiddleware } from "../controllers/uploadController.js";

const router = express.Router();

router.put("/update-image", uploadMiddleware, imgUpload);

export default router;
