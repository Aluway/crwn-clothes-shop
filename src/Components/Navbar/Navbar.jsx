import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTransition, animated } from "react-spring";

import { showModal } from "../../store/actions/signinAction";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartLogo } from "../../assets/shopping-bag.svg";

import { NavLink } from "react-router-dom";

import Cart from "../Cart/Cart";

import "./Navbar.scss";
import SigninModal from "../SigninModal/SigninModal";

function Navbar(props) {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  const AnimatedCart = animated(Cart);
  const transition = useTransition(showCart, {
    config: { duration: 250 },
    from: { opacity: 0, height: 60 },
    enter: { opacity: 1, height: 320 },
    leave: { opacity: 0, height: 60 },
  });

  return (
    <div className="navbar__container">
      <NavLink to="/" className="navbar__logo_container">
        <Logo className="navbar__logo" />
      </NavLink>
      <ul className="navbar__options_container">
        <NavLink to="/contacts" className="navbar__option">
          CONTACTS
        </NavLink>
        <li
          onClick={() => dispatch(showModal(<SigninModal />))}
          className="navbar__option"
        >
          SIGN IN
        </li>
        <div
          onClick={() => setShowCart(!showCart)}
          className="navbar__cart_container"
        >
          <CartLogo className="navbar__cart" />
        </div>
      </ul>
      {transition((style, item) => {
        return item ? <AnimatedCart style={style} /> : "";
      })}
    </div>
  );
}
export default Navbar;
