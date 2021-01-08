import React, { useState, useEffect } from "react";
import "./Dashboard.scss";
import LoadingPokeball from "../Shared/LoadingPokeball/LoadingPokeball";
import axios from "axios";
import Card from "../Shared/Card/Card";

export default function Dashboard() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  // I won't use environment variables or api because the app is small for this case.
  const fetchData = () => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://pokeapi.co/api/v2/pokemon/",
    }).then((res) => {
      console.log(res.data.results);
      setPokemons(res.data.results);
      setLoading(false);
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
          <div className="dashboard__search">
            <input
              className="darshboard__input"
              placeholder="Buscar por nombre"
            ></input>
            <button className="button-primary">Buscar</button>
          </div>
          <div className="dashboard__cards">
            {pokemons.map((item) => {
              return <Card name={item.name} link={item.url} key={item.name} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
