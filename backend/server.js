import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ⭐ IMPORT ROUTES
import quotationRoutes from "./routes/quotation.js";
import contactRoutes from "./routes/contact.js";   // <-- NEW

dotenv.config();

const app = express();

// ⭐ MIDDLEWARES
app.use(cors());
app.use(express.json());

// ⭐ REGISTER ROUTES
app.use("/api/quotation", quotationRoutes);
app.use("/api/contact", contactRoutes);            // <-- NEW

// ⭐ CONNECT TO MONGODB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// ⭐ START SERVER
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
