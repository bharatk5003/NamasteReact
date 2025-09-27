import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resId = "10370";
    const data = await fetch(`${RESTAURANT_MENU}${resId}`);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };

  const { name, defaultPrice } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards[0]?.card?.info;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h2>price:{defaultPrice}</h2>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
