import mongoose from "mongoose";
import { restaurantSchema } from "../schemas/restaurantSchema.js";

export const restaurantModel = mongoose.model("Restaurant", restaurantSchema);
export const topRestaurantModel = mongoose.model("TopRestaurant", restaurantSchema);
