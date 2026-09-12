import { MdStars } from "react-icons/md";
import "../styles/CartItem.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../store/slices/CartSlice";


function CartItem({ item }) {
    const dispatch = useDispatch();

    
    const [dishQuantity, setDishQuantity] = useState(1);
    useEffect(() => {
        dispatch(updateItemQuantity({ itemId: item.id, quantity: dishQuantity }));
    }, [dishQuantity, dispatch, item.id]);
  return (
    <div className="cart-item">
      <div className="cart-item-card">
        <div className="item-details">
          <p className="item-name">{item.name}</p>
          <span className="rating-section">
            <MdStars className="rating-icon" />
            <span>{item?.ratings.aggregatedRating?.rating}</span>
          </span>
          <p className="cart-item-price">₹ {item.defaultPrice/100 || item.price/100}</p>
          <p className="cart-item-description">{item.description}</p>
          <label>Quantity</label>
          <button onClick={() => setDishQuantity(dishQuantity + 1)}>+</button>
          <span className="dish-quantity">{dishQuantity}</span>
          <button onClick={() => setDishQuantity(dishQuantity > 1 ? dishQuantity - 1 : 1)}>-</button>
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
