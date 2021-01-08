import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingPokeball from "../LoadingPokeball/LoadingPokeball";
import "./Card.scss";

export default function Card({ name, link }) {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    console.log(link);
    setLoading(true);
    axios({
      method: "GET",
      url: link,
    }).then((res) => {
      console.log(res.data);
      setPokemon(res.data);
      setLoading(false);
    });
  }, [link]);

  return (
    <div className="card">
      <>
        {!loading ? (
          <div className="card__image">
            <img
              src={pokemon.sprites.front_default}
              alt={"Pokemon"}
              style={{ height: "100%" }}
            />
          </div>
        ) : (
          <div className="card__image">
            <LoadingPokeball />
          </div>
        )}
      </>

      <div className="card__name">{name}</div>
      <div className="card__actions">
        <button className="button-primary">Añadir al carro</button>
      </div>
    </div>
  );
}
