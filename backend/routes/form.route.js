import express from "express";
import { formPost } from "../controllers/form.controller.js";

const router = express.Router();

router.post("/", formPost);

export default router;
