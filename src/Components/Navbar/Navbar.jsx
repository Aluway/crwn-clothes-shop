import React, { useState } from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as Cart } from "../../assets/shopping-bag.svg";

import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar(props) {
  const [isSignedIn, setIsSignedIt] = useState(false);

  return (
    <div className="navbar__container">
      <NavLink to="/" className="navbar__logo_container">
        <Logo className="navbar__logo" />
      </NavLink>
      <ul className="navbar__options_container">
        <NavLink to="/shop" className="navbar__option">
          SHOP
        </NavLink>
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
        <div className="navbar__cart_container">
          <Cart className="navbar__cart" />
        </div>
      </ul>
    </div>
  );
}
export default Navbar;
