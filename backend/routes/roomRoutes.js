import express from "express";
import { getRooms, getRoom, addRoom, updateRoom, deleteRoom } from "../controllers/roomController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/", upload.single("image"), addRoom);
router.put("/:id", upload.single("image"), updateRoom);
router.delete("/:id", deleteRoom);

export default router;