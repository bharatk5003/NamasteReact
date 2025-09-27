import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const resId = "10370";
    const data = await fetch(`${RESTAURANT_MENU}${resId}`);
    const json = await data.json();
    console.log(json);
    setResInfo(json);
  };
  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.itemCards
  // );
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  console.log(itemCards);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}> {item.card.info.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
