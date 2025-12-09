import mongoose from "mongoose";

const quotationSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    product: String,
    quantity: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Quotation ||
  mongoose.model("Quotation", quotationSchema);
