import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [nextOffset, setNextOffset] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
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

export default Body;
