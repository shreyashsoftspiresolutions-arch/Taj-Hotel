import express from "express";
import { getFoods, getFood, addFood, updateFood, deleteFood } from "../controllers/foodController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getFoods);
router.get("/:id", getFood);
router.post("/", upload.single("image"), addFood);
router.put("/:id", upload.single("image"), updateFood);
router.delete("/:id", deleteFood);

export default router;