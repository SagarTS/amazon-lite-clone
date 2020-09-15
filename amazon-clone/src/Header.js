import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header-logo"
          alt=""
        />
      </Link>

      <div className="header-search">
        <input type="text" className="header-input" />
        <SearchIcon className="header-SearchIcon" />
      </div>

      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header-option">
            <span className="headerOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="headerTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header-option">
            <span className="headerOne">Returns</span>
            <span className="headerTwo">& Orders</span>
          </div>
        </Link>

        <div className="header-option">
          <span className="headerOne">Your</span>
          <span className="headerTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header-basket">
            <ShoppingBasketIcon className="basket" />
            <span className="headerTwo basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
