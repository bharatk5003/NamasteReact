import { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  //If no dependency array ==> useEffect is called on every render
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="heading">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      {/* <div className="login-button">
        <button>Login</button>
      </div> */}
    </div>
  );
};

export default Header;
