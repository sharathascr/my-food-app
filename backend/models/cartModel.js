import mongoose from "mongoose";
import { cartSchema } from "../schemas/cartSchema.js";

export const cartModal = mongoose.model("Cart", cartSchema);
