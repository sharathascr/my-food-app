import Collections from "../components/Collections";
import RestraurantCard from "../components/RestraurantCard";
import { useFetch } from "../custom-hooks/useFetch";
import "../styles/Home.css";

function Home() {
  const {
    data: { collections },
    isLoading: collectionsLoading,
    error: collectionsError,
  } = useFetch("http://localhost:7777/collections/all");

  const {
    data: { restaurants },
    isLoading: restraurantsLoading,
    error: restraurantsError,
  } = useFetch("http://localhost:7777/restaurant/all");

  return (
    <div className="home-container">
      <div className="whats-on-mind-container">
        <p>Sharath, what's on your mind?</p>
        {collectionsLoading ? (
          <p>collections loading</p>
        ) : (
          <div className="collectons-items">
            {collectionsError ? (
              <p>{collectionsError}</p>
            ) : (
              <>
                {collections.slice(0, 6).map((collection) => (
                  <div className="collection-item" key={collection.id}>
                    <Collections collection={collection} />
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>

      <div className="top-restraurant-container">
        <p>Restraurants with online delivery</p>
        {restraurantsLoading ? (
          <p>top restraurants loading</p>
        ) : (
          <div className="restraurant-items">
            {restraurantsError ? (
              <p>{restraurantsError}</p>
            ) : (
              <>
                {restaurants.map((restraurant) => (
                  <RestraurantCard
                    key={restraurant.id}
                    restraurant={restraurant}
                  />
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
