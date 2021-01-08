import React from "react";
import logo from "../../../Assets/pokeball.png";
import "./LoadingPokeball.scss";

export default function LoadingPokeball() {
  return <img className="loading-pokeball" src={logo} alt={"loading"} />;
}
