import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Product",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "Users",
    },
    status: {
      type: String,
      default: "Not Process",
      emun: ["Not Process", "Processing", "Shipped", "delivered", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Orders", orderSchema);
