import express from "express";
import userAuth from "../middlewares/userAuth.js";
import { cartModal } from "../models/cartModel.js";

const router = express.Router();

router.get("/cart", userAuth, async (req, res) => {
  const cart = await cartModal.find({ userId: req.user.id });
  res.send({
    success: true,
    message: "Fetched cart successfully",
    cart,
    cartCount: cart.length,
  });
});

router.post("/cart/add", userAuth, async (req, res) => {
  const userId = req.user.id;
  const checkItemExist = await cartModal.findOne({
    userId: req.user.id,
    resId: req.body.resId,
    "item.id": req.body.item.id,
  });
  if (checkItemExist) {
    checkItemExist.quantity += 1;
    await checkItemExist.save();
    return res
      .status(200)
      .send({ success: true, message: "quantity incremented" });
  }
  const cartResponse = new cartModal({ userId, ...req.body });
  const cartItem = await cartResponse.save();
  res.status(201).send({
    success: true,
    message: "item added to cart successfully",
    cartItem,
  });
});

router.get("/cart/amount", userAuth, async (req, res) => {
  const cart = await cartModal.find({ userId: req.user.id });
  const discount = 10;
  const tax = 5;
  const amount = cart.reduce((sum, cur) => {
    return sum + cur.item.defaultPrice * cur.quantity;
  }, 0);
  const discountedAmount = amount - amount / discount;
  const taxAmount = (discountedAmount / 100) * tax;
  const grandTotal = discountedAmount + taxAmount;
  res.send({
    totalAmount: Number((amount / 100).toFixed(2)),
    discount: Number(amount / discount / 100).toFixed(2),
    discountedAmount: Number((discountedAmount / 100).toFixed(2)),
    grandTotal: Number((grandTotal / 100).toFixed(2)),
    taxAmount: Number(taxAmount / 100),
  });
});

router.delete("/cart/item", userAuth, async (req, res) => {
  const response = await cartModal.findOneAndDelete({
    _id: req.body._id,
    userId: req.user.id,
  });

  if (!response) {
    return res
      .status(404)
      .send({ success: false, message: "Cart item not found" });
  }

  res
    .status(200)
    .send({ success: true, message: "deleted successfully", response });
});

export default router;
