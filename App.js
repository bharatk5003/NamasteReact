import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="heading">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.pixelbinz0.de/v2/yellow-fog-88d971/original/delvery.jpg"
        />
      </div>
      <div className="nav-items">
        <ul className="list-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
