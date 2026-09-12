import express from "express";
import userAuth from "../middlewares/userAuth.js";
import { cartModal } from "../models/cartModel.js";

const router = express.Router();

router.get("/cart", userAuth, async (req, res) => {
  const cart = await cartModal.find();
  res.send({ success: true, cart });
});

export default router;
