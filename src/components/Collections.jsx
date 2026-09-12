import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSearch } from "../store/slices/SearchSlice";

function Collections({ collection }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        dispatch(updateSearch(collection.action.text));
        navigate(`/searchRestraurant/${collection.action.text}`);
      }}
    >
      <img
        className="collection-image"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${collection.imageId}`}
        alt={collection.accessibility.altText}
      />
    </div>
  );
}

export default Collections;
