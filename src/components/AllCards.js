import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import pokemon from "../pokemon.json";
import axios from "axios";

export default function AllCards() {
  const [pokemons, setPokemons] = useState(pokemon);

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data);
        setPokemons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  console.log(pokemons);
  return (
    <div className="grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      {pokemon.map((pokemon, index) => {
        return (
          <SingleCard name={pokemon.name.english} image={pokemons.results} />
        );
      })}
    </div>
  );
}
