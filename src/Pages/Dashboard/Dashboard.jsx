import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import LoadingPokeball from "../Shared/LoadingPokeball/LoadingPokeball";
import axios from "axios";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios({
      method: "GET",
    });
  };

  return (
    <>
      {loading ? (
        <div className="dashboard loading">
          <LoadingPokeball />
        </div>
      ) : (
        <div className="dashboard">
          <h1>CARGÓ ÑERO</h1>
        </div>
      )}
    </>
  );
}
