import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
  //If no dependency array ==> useEffect is called on every render
  useEffect(() => {
    // console.log("useEffect called");
  }, []);

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
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
      {/* <div className="login-button">
        <button>Login</button>
      </div> */}
    </div>
  );
};

export default Header;
