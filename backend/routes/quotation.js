import express from "express";
import Quotation from "../models/Quotation.js";

const router = express.Router();

// TEMP LOGS TO DEBUG INSERT
router.post("/", async (req, res) => {
  try {
    console.log("Data received:", req.body);

    const data = await Quotation.create(req.body);

    console.log("Saved in DB:", data);

    res.json({ success: true, data });
  } catch (error) {
    console.log("ERROR:", error);
    res.json({ success: false, error: error.message });
  }
});

export default router;
