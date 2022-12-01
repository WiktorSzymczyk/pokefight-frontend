import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import pokemons from "../pokemon.json";
import axios from "axios";
import { pokemonApi1 } from "./Api1";

export default function AllCards() {
  const [data, setData] = useState("");

  useEffect(() => {
    pokemonApi1().then((result) => setData(result));
  }, []);

  const testing = data.data?.[0].id;
  return (
    <>
      <input className="p-2 rounded" placeholder="search the pokemon" />
      <button className="p-2 bg-[#222222] text-white">Search</button>
      <div className="grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {data === "" ? (
          <h1>Wait for the data please!</h1>
        ) : (
          data.data.map((pokemon, index) => {
            return (
              <SingleCard
                name={pokemon.name.english}
                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1
                }.png`}
                key={index}
              />
            );
          })
        )}
      </div>
    </>
  );
}
