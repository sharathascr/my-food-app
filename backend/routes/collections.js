import express from "express";
import { CollectionModel } from "../models/collectionsModel.js";

const router = express.Router();

router.post("/collections/save", async (req, res) => {
  const collection = new CollectionModel(req.body);
  const response = await collection.save();

  res.send({
    success: true,
    message: "collection is saved successfully",
    response,
  });
});

router.get("/collections/all", async (req, res) => {
  const collections = await CollectionModel.find();
  res.status(200).send({
    success: true,
    message: "Fetched collections successfully",
    collections,
  });
});

export default router;
