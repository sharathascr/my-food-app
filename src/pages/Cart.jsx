import CartItem from "../components/CartItem";
import "../styles/Cart.css";
import { useFetch } from "../custom-hooks/useFetch.js";

function Cart() {
  const {
    data: { cart = [] } = {},
    isLoading,
    error,
    refetch: refetchCart,
  } = useFetch("http://localhost:7777/cart");

  const {
    data: { totalAmount, discount, discountedAmount, grandTotal, taxAmount },
    isLoading: amountLoading,
    error: amountError,
    refetch: refetchAmount,
  } = useFetch("http://localhost:7777/cart/amount");

  const handleItemRemoved = () => {
    refetchCart();
    refetchAmount();
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {isLoading ? (
        <h1>Cart is loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error while fetching cart</h1>
          ) : (
            <>
              {cart.length === 0 ? (
                <h1>cart is empty</h1>
              ) : (
                <>
                  {" "}
                  {cart.map((item) => (
                    <CartItem
                      key={item._id}
                      item={item}
                      onRemoved={handleItemRemoved}
                    />
                  ))}
                </>
              )}
            </>
          )}
        </>
      )}

      <div className="checkout-section">
        {amountLoading ? (
          <>amount loading</>
        ) : (
          <>
            {amountError ? (
              <>Error while loading amount</>
            ) : (
              <div className="amount-section">
                <p>
                  <span>Total Amount: </span>
                  <span>₹ {totalAmount}</span>
                </p>
                <p>
                  <span>Tax (5%): </span>
                  <span>₹ {taxAmount}</span>
                </p>
                <p>
                  <span>Discount {10}%: </span>
                  <span>₹ {discount}</span>
                </p>
                <p>
                  <span>After Discount Amount: </span>
                  <span>₹ {discountedAmount}</span>
                </p>
                <p>
                  <span>Grand Total: </span>
                  <span>₹ {grandTotal}</span>
                </p>
              </div>
            )}
          </>
        )}
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
