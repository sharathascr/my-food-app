import { useParams } from "react-router-dom";
import "../styles/SearchRestraurant.css";
import { useFetch } from "../custom-hooks/useFetch";
import RestraurantCard from "../components/RestraurantCard";

function SearchRestraurants() {
  const { cusinie } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:7777/restaurant/searchCusinie/${encodeURIComponent(cusinie)}`,
  );
  const restaurants = data?.restaurants ?? [];

  return (
    <div className="search-restraurant-section">
      {isLoading ? (
        <>loading......</>
      ) : (
        <>
          {error ? (
            <>{error.toString()}</>
          ) : (
            <>
              <h1 className="search-header">Showing results for {cusinie}</h1>
              <div className="restaurants-container">
                {restaurants.map((restaurant) => (
                  <RestraurantCard
                    key={restaurant.id}
                    restraurant={restaurant}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SearchRestraurants;
