import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
// import bookingRoutes from "./routes/bookingRoutes.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app=express();

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(cors());

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/rooms",roomRoutes);
app.use("/api/food",foodRoutes);
app.use("/api/admin",adminRoutes);

app.use("/api/hotels",hotelRoutes);

// app.use("/api/bookings",bookingRoutes);

app.listen(process.env.PORT,()=>{

console.log("Server Running");

});