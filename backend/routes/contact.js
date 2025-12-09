import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const saved = await ContactMessage.create(req.body);
    res.json({ success: true, data: saved });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
});

export default router;
