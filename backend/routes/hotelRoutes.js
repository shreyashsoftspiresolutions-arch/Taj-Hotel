import express from "express";
import {
  getHotels,
  getHotel,
  addHotel,
  updateHotel,
  deleteHotel,
} from "../controllers/hotelController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getHotels);
router.get("/:id", getHotel);
router.post("/", upload.single("image"), addHotel);
router.put("/:id", upload.single("image"), updateHotel);
router.delete("/:id", deleteHotel);

export default router;