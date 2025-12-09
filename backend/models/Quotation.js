import mongoose from "mongoose";

const QuotationSchema = new mongoose.Schema({
  name: String,
  email: String,
  product: String,
  quantity: Number,
  notes: String
}, { timestamps: true });

export default mongoose.model("Quotation", QuotationSchema);
