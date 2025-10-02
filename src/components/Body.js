import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RESTAURANT_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [nextOffset, setNextOffset] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // console.log("useEffect called");
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json();
    const restaurants =
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurants);
    setAllRestaurants(restaurants); // full list
    setFilteredRestaurants(restaurants);

    const offset = jsonData.data.pageOffset?.nextOffset;
    setNextOffset(offset);
  };

  const filter = () => {
    const res = allRestaurants.filter((restaurant) => {
      return restaurant.info.avgRating >= 4.7;
    });
    setFilteredRestaurants(res);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    setSearchText(value);
    const resData = allRestaurants.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(resData);
    setFilteredRestaurants(resData);
  };
  if (allRestaurants.length === 0) {
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
          value={searchText}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
