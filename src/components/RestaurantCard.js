import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
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
  const data = useContext(UserContext);
  //   console.log(cuisines);
  // console.log(cloudinaryImageId);
  return (
    <div className="res-card">
      <div className="res-image-container">
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
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
        <p className="font-bold">User: {data.loggedInUser}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
