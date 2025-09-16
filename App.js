import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { FaStar } from "react-icons/fa";

const Header = () => {
  return (
    <div className="heading">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.pixelbinz0.de/v2/yellow-fog-88d971/original/delvery.jpg"
        />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  info: {
    id: "683064",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/73b7c83d-a281-4d45-91ef-472535c9bda5_683064.JPG",
    locality: "Saat Rasta Circle",
    areaName: "Mahalaxmi Malabar Hill",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "3.1K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-16 03:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Pizza.png",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {},
    aggregatedDiscountInfoV3: {},
    orderabilityCommunication: {},
    differentiatedUi: {},
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {},
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {},
  cta: {},
  widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwo,
    sla,
    locality,
  } = resData.info;
  console.log(cuisines);
  // console.log(cloudinaryImageId);
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        />
        <div className="price-overlay">{costForTwo}</div>
      </div>
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <p className="res-meta">
          <FaStar color="#00C853" size={12} /> {avgRating} • {sla?.slaString}
        </p>
        <p className="res-cuisines">{cuisines.join(", ")}</p>
        <p className="res-locality">{locality}</p>
      </div>
    </div>
  );
};

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5796842&lng=88.414312&is-seo-homepage-enabled=true"
    );
    const jsonData = await data.json();
    const restaurants =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurants);
    setRestaurantList(restaurants);
  };

  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..."></input>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
