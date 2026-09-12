import mongoose from "mongoose";
import { collectionSchema } from "../schemas/collectionsSchema.js";

export const CollectionModel = mongoose.model("Collection", collectionSchema);
