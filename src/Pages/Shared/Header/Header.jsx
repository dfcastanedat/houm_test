import React from "react";
import "./Header.scss";
import logo from "../../../Assets/pokeball.png";
import cart from "../../../Assets/shopping-cart.svg";

export default function Header() {
  return (
    <div className="header">
      <img className="header__brand" src={logo} alt={"logo"} />
      <h1 className="header__title">PokeStore</h1>
      <div className="header__checkout">
        <span className="header__count">2</span>
        <img className="header__cart" src={cart} alt={"shopping cart"} />
      </div>
    </div>
  );
}
