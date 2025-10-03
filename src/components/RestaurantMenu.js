import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  // console.log(
  //   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card?.itemCards
  // );
  // console.log(resInfo);
  const { text: name } = resInfo?.data?.cards[0]?.card?.card || {};
  resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    ?.card || {};

  const items =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(items);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl ">{name}</h1>

      {/* Build an accodian */}
      {items.map((item) => {
        return (
          <RestaurantCategory
            key={item.card.card.categoryId}
            data={item.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
