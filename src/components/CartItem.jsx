import { MdStars } from "react-icons/md";
import "../styles/CartItem.css";
import axios from "axios";

function CartItem({ item: cartItem, onRemoved }) {
  const { item, quantity, _id } = cartItem;

  const handleRemove = async () => {
    const response = await axios.delete("http://localhost:7777/cart/item", {
      data: { _id },
      withCredentials: true,
    });
    if (response.data.success) {
      onRemoved();
    }
  };
  return (
    <div className="cart-item">
      <div className="cart-item-card">
        <div className="item-details">
          <p className="item-name">{item.name}</p>
          <span className="rating-section">
            <MdStars className="rating-icon" />
            <span>{item?.ratings?.aggregatedRating?.rating}</span>
          </span>
          <p className="cart-item-price">
            ₹ {item?.defaultPrice / 100 || item?.price / 100}
          </p>
          <p className="cart-item-description">{item?.description}</p>
          <label>Quantity</label>
          <button>+</button>
          <span className="dish-quantity">{quantity}</span>
          <button>-</button>
          <div>
            <button className="cart-remove-button" onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
        <div className="cart-item-image">
          <img
            className="res-image"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item?.imageId}/`}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
