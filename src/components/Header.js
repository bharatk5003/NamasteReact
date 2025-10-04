import { useContext, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  //If no dependency array ==> useEffect is called on every render
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart({cartItems.length})items</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
      {/* <div className="login-button">
        <button>Login</button>
      </div> */}
    </div>
  );
};

export default Header;
