import express from "express";
import {
  restaurantModel,
  topRestaurantModel,
} from "../models/restaurantsModel.js";

const router = express.Router();

router.get("/restaurant/top", async (req, res) => {
  const topRestaurants = await topRestaurantModel.find();
  res.send({ message: "Fetched top restaurants", topRestaurants });
});

router.get("/restaurant/all", async (req, res) => {
  const restaurants = await restaurantModel.find();
  res.send({ message: "Fetched all restaurants", restaurants });
});
router.get("/restaurant/:id", async (req, res) => {
  const resId = req.params.id;
  const restaurant = await restaurantModel.findOne({ id: resId });
  if (!restaurant) {
    const topRestaurant = await topRestaurantModel.findOne({ id: resId });
    if (!topRestaurant) {
      return res.status(404).send({ message: "Restaurant not found" });
    }
    return res.send({ message: "Fetched successfully", data: topRestaurant });
  }
  res.send({ message: "Fetched successfully", data: restaurant });
});

router.post("/restaurant/save", async (req, res) => {
  const restaurant = new restaurantModel(req.body);
  const response = await restaurant.save();
  res.send({ message: "Restaurant saved", data: response });
});

router.get("/restaurants", async (req, res) => {
  const page = Math.max(Number.parseInt(req.query.page, 10) || 1, 1);
  const limit = Math.min(
    Math.max(Number.parseInt(req.query.limit, 10) || 10, 1),
    100,
  );

  const filter = {};

  if (req.query.cuisine) {
    filter.cuisines = {
      $regex: req.query.cuisine,
      $options: "i",
    };
  }

  if (req.query.rating) {
    filter.avgRating = {
      $gte: Number(req.query.rating),
    };
  }

  let query = restaurantModel
    .find(filter)
    .skip((page - 1) * limit)
    .limit(limit);

  if (req.query.sort === "rating") {
    query = query.sort({ avgRating: -1 });
  }

  const restaurants = await query;
  res.send({ message: "Fetched successfully", data: restaurants });
});

router.patch("/restaurant/:id", async (req, res) => {
  const resId = req.params.id;
  const itemsCard = Array.isArray(req.body)
    ? req.body.map((item) => ({
        ...item,
        defaultPrice: item.defaultPrice ?? item.price,
      }))
    : req.body.itemsCard;

  if (!Array.isArray(itemsCard)) {
    return res.status(400).send({
      message: "Request body must be an array of item cards",
    });
  }

  const restaurant = await topRestaurantModel.findOneAndUpdate(
    { id: resId },
    { $set: { itemsCard } },
    { new: true, runValidators: true },
  );

  if (!restaurant) {
    return res.status(404).send({ message: "Restaurant not found" });
  }

  res.send({ message: "Updated successfully", data: restaurant.itemsCard });
});

router.get("/restaurant/searchCusinie/:cusinie", async (req, res) => {
  const cusinie = req.params.cusinie;
  const restaurants = await restaurantModel.find({
    $or: [
      { cuisines: { $regex: cusinie, $options: "i" } },
      {
        "itemCards.name": { $regex: cusinie, $options: "i" },
      },
    ],
  });
  res.send({
    success: true,
    message: "Fetched restaurant successfully",
    restaurants,
  });
});

export default router;
