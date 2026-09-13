import express from "express";
import {
  restaurantModel,
  topRestaurantModel,
} from "../models/restaurantsModel.js";
import userAuth from "../middlewares/userAuth.js";

const router = express.Router();

router.get("/restaurant/top", async (req, res, next) => {
  try {
    const topRestaurants = await topRestaurantModel.find();
    res.send({ message: "Fetched top restaurants", topRestaurants });
  } catch (err) {
    next(err);
  }
});

router.get("/restaurant/all", async (req, res, next) => {
  try {
    const restaurants = await restaurantModel.find();
    res.send({ message: "Fetched all restaurants", restaurants });
  } catch (err) {
    next(err);
  }
});

router.get("/restaurant/:id", async (req, res, next) => {
  try {
    const resId = req.params.id;
    const restaurant = await restaurantModel.findOne({ id: resId });

    res.send({ message: "Fetched successfully", data: restaurant });
  } catch (err) {
    next(err);
  }
});

router.post("/restaurant/save", async (req, res) => {
  const restaurant = new restaurantModel(req.body);
  const response = await restaurant.save();
  res.send({ message: "Restaurant saved", data: response });
});

router.get("/restaurants", async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
});

router.patch("/restaurant/:id", userAuth, async (req, res, next) => {
  try {
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

    const restaurant = await restaurantModel.findOneAndUpdate(
      { id: resId },
      { $set: { itemsCard } },
      { new: true, runValidators: true },
    );

    if (!restaurant) {
      return res.status(404).send({ message: "Restaurant not found" });
    }

    res.send({ message: "Updated successfully", data: restaurant.itemsCard });
  } catch (err) {
    next(err);
  }
});

router.get("/restaurant/searchCusinie/:cusinie", async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
});

export default router;
