import { useParams } from "react-router-dom";
import "../styles/Restraurant.css";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { IoReturnUpBack } from "react-icons/io5";

function Restraurant() {
  const [restaurant, setRestaurant] = useState(null);
  const { restraurantId } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `http://localhost:7777/restaurant/${restraurantId}`,
      );
      setRestaurant(response.data.data);
    }
    fetchData();
    scrollTo(0, 0);
  }, [restraurantId]);

  const handleAddToCart = async (a, b) => {
    if (!isAuthenticated) {
      navigate("/signin");
      return;
    }

    const addToCartPayload = { resId: a, item: { ...b } };
    await axios.post("http://localhost:7777/cart/add", addToCartPayload, {
      withCredentials: true,
    });
    toast.success(`${b.name} added to cart successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
    });
  };

  if (!restaurant) {
    return <p>Restaurant data is unavailable.</p>;
  }
  return (
    <div className="restaurant-information">
      <button className="back-button" onClick={() => window.history.back()}>
        <IoReturnUpBack className="back-icon" />
      </button>
      <h1>{restaurant.name}</h1>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant?.cloudinaryImageId || restaurant?.cloudinaryImageId}/`}
        className="restaurant-information-image"
      />
      <div className="rating-costForTwo">
        <MdStars className="rating-icon" />
        <span className="restaurant-avgRating">{restaurant?.avgRating}</span>
        <span className="restaurant-totalRatings">
          ({restaurant?.totalRatingsString || "NA"}
          {" ratings"})
        </span>
        <span>
          <LuDot className="costForTwo-dot" />
          {restaurant.costForTwo}
        </span>
      </div>
      <div className="restaurant-dishes-section">
        {restaurant.itemsCard.map((card) => (
          <div className="restaurant-dish-card" key={card.id}>
            <div className="restaurant-dish-content">
              <h2 className="res-dish-name">{card.name}</h2>
              <p className="res-dish-price">
                ₹ {card.defaultPrice / 100 || card.price / 100}
              </p>
              {card?.ratings?.aggregatedRating?.rating && (
                <div className="res-dish-rating-section">
                  <FaStar
                    className={`${Number(card.ratings.aggregatedRating.rating) >= 4 ? "high-rating" : "low-rating"} res-dish-rating `}
                  />
                  <span
                    className={`${Number(card.ratings.aggregatedRating.rating) >= 4 ? "high-rating" : "low-rating"} res-dish-rating `}
                  >
                    {card.ratings.aggregatedRating.rating}
                  </span>
                  <span className="res-dish-rating">
                    ({card.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
              <p className="res-dish-description">{card?.description}</p>
            </div>

            <div className="res-dish-image-section">
              <img
                className="res-dish-image"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${card.imageId || card.cloudinaryImageId}`}
              />
              <button
                className="add-button"
                onClick={() => handleAddToCart(restaurant.id, card)}
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Restraurant;
