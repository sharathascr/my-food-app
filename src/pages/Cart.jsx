import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="checkout-section">
        <p className="total-price">
          Total Price: ₹{" "}
          {cart.reduce(
            (total, item) =>
              total + item.quantity * (item.defaultPrice || item.price),
            0,
          ) / 100}
        </p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
