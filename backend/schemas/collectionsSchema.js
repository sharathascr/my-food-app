import mongoose from "mongoose";

export const collectionSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Id is required"],
    unique:true
  },
  imageId: {
    type: String,
    required: [true, "imageId is required"],
  },
  action: {
    link: {
      type: String,
      required: [true, "link is required"],
    },
    text: {
      type: String,
      required: [true, "text is required"],
    },
  },
  entityType: {
    type: String,
    required: [true, "entityType is required"],
  },
  accessibility: {
    altText: {
      type: String,
      required: [true, "altText is required"],
    },
  },
});
