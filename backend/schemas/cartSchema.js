import mongoose from "mongoose";
import { itemCardSchema } from "./itemCardSchema.js";

export const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required:[true, "userId is required"],
    unique:true
  },
  resId:{
    type:String,
    required:[true, "Restaurant Id is required"]
  },
  itemsCard:itemCardSchema
});
