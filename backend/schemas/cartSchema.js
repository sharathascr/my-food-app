import mongoose from "mongoose";
import { itemCardSchema } from "./itemCardSchema.js";

export const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "userId is required"],
  },
  resId: {
    type: String,
    required: [true, "Restaurant Id is required"],
  },
  item: {
    type: itemCardSchema,
    required: [true, "item is required"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

cartSchema.index({ userId: 1, resId: 1, "item.id": 1 }, { unique: true });
