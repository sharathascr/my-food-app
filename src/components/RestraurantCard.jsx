import { MdStars } from "react-icons/md";
import { useNavigate } from "react-router-dom";


function RestraurantCard({ restraurant }) {
  const navigate = useNavigate();
  return (
    <div
      className="restraurant-card"
      key={restraurant?.id || restraurant?.info?.id}
      onClick={() => {
        sessionStorage.setItem("homeScrollPosition", window.scrollY);
        navigate(`/restraurant/${restraurant?.id}`);
      }}
    >
      <img
        className="res-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restraurant?.cloudinaryImageId || restraurant?.info?.cloudinaryImageId}/`}
      />
      <div className="restraurant-details">
        <p className="restraurant-name">
          {restraurant.name || restraurant.info.name}
        </p>
        <span className="rating-section">
          <MdStars className="rating-icon" />
          <span>{restraurant.avgRating || restraurant.info.avgRating}</span>
        </span>
        <p className="cuisines-section">
          {restraurant?.cuisines?.join(", ") ||
            restraurant?.info?.cuisines?.join(", ")}
        </p>
        <p className="restraurant-locality">
          {restraurant.areaName || restraurant.info.areaName}
        </p>
      </div>
    </div>
  );
}

export default RestraurantCard;
