import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import LoadingPokeball from "../Shared/LoadingPokeball/LoadingPokeball";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div className="dashboard loading">
      <LoadingPokeball />
    </div>
  );
}
