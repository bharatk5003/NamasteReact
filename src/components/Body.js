import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [nextOffset, setNextOffset] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    console.log("useEffect called");
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json();
    const restaurants =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurants);
    setRestaurantList(restaurants);

    const offset = jsonData.data.pageOffset?.nextOffset;
    setNextOffset(offset);
  };

  const filter = () => {
    const res = restaurantList.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.7;
    });
    setRestaurantList(res);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    const resData = restaurantList.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(resData);
    setRestaurantList(resData);
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter-restaurant">
        <button type="button" onClick={filter}>
          Filter
        </button>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
        ></input>
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

export default Body;
