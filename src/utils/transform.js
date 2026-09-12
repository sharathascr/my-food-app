import fs from "fs";

const filePath = "E:/reactjs/my-food-app/db.json";

const data = JSON.parse(
  fs.readFileSync(filePath, "utf-8")
);

// Restaurant-level fields that are not required
const restaurantFieldsToRemove = [
  "badges",
  "badgesV2",
  "aggregatedDiscountInfoV3",
  "loyaltyDiscoverPresentationInfo",
  "orderabilityCommunication",
  "differentiatedUi",
  "reviewsSummary",
  "displayType",
  "restaurantOfferPresentationInfo",
  "externalRatings",
  "ratingsDisplayPreference"
];

// Dish-level fields that are not required
const dishFieldsToRemove = [
  "ratingsPresentationConfig",
  "priceComparisonComms",
  "instrumentationMetaMap"
];

const cleanDish = (item) => {
  // item = {
  //   card: {
  //     @type: "...",
  //     info: {...},
  //     analytics: {},
  //     hideRestaurantDetails: true
  //   }
  // }

  const dish = item?.card?.info;

  if (!dish) {
    return null;
  }

  // Copy the complete dish info
  const cleanedDish = { ...dish };

  // Remove unwanted dish-level fields
  dishFieldsToRemove.forEach((field) => {
    delete cleanedDish[field];
  });

  return cleanedDish;
};

const cleanRestaurant = (restaurant) => {
  // restaurant = {
  //   @type: "...",
  //   info: {...},
  //   analytics: {...},
  //   cta: {...},
  //   widgetId: "..."
  // }

  const restaurantInfo = restaurant?.info;

  if (!restaurantInfo) {
    return null;
  }

  // Copy all restaurant info
  const cleanedRestaurant = {
    ...restaurantInfo
  };

  // Remove unwanted restaurant-level fields
  restaurantFieldsToRemove.forEach((field) => {
    delete cleanedRestaurant[field];
  });

  // Clean itemCards
  if (Array.isArray(cleanedRestaurant.itemCards)) {
    cleanedRestaurant.itemCards = cleanedRestaurant.itemCards
      .map(cleanDish)
      .filter(Boolean);
  }

  return cleanedRestaurant;
};

// Clean restaurants
if (Array.isArray(data.restaurants)) {
  data.restaurants = data.restaurants
    .map(cleanRestaurant)
    .filter(Boolean);
}

// Write the cleaned data back to db.json
fs.writeFileSync(
  filePath,
  JSON.stringify(data, null, 2),
  "utf-8"
);

console.log("✅ db.json transformed successfully!");