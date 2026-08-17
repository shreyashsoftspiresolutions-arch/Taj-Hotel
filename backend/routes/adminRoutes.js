import express from "express";
import { dashboard, updateBookingStatus, updateOrderStatus } from "../controllers/adminController.js";

const router = express.Router();

router.get("/dashboard", dashboard);
router.put("/booking/:id", updateBookingStatus);
router.put("/order/:id", updateOrderStatus);

export default router;