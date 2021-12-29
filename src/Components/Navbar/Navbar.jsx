import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";

import { NavLink } from "react-router-dom";

import Cart from "../Cart/Cart";

import "./Navbar.scss";

function Navbar(props) {
  const [isSignedIn, setIsSignedIt] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="navbar__container">
      <NavLink to="/" className="navbar__logo_container">
        <Logo className="navbar__logo" />
      </NavLink>
      <ul className="navbar__options_container">
        <NavLink to="/contacts" className="navbar__option">
          CONTACTS
        </NavLink>
        {isSignedIn ? (
          <li
            onClick={() => setIsSignedIt(!isSignedIn)}
            className="navbar__option"
          >
            SIGN OUT
          </li>
        ) : (
          <li
            onClick={() => setIsSignedIt(!isSignedIn)}
            className="navbar__option"
          >
            SIGN IN
          </li>
        )}
        <div
          onClick={() => setShowCart(!showCart)}
          className="navbar__cart_container"
        >
          <CartLogo className="navbar__cart" />
        </div>
      </ul>
      {showCart && <Cart />}
    </div>
  );
}
export default Navbar;
