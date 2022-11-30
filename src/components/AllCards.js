import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import pokemon from "../pokemon.json";
import axios from "axios";

export default function AllCards() {
  return (
    <div className="grid grid-rows-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
      {pokemon.map((pokemon, index) => {
        return (
          <SingleCard
            name={pokemon.name.english}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            key={index}
          />
        );
      })}
    </div>
  );
}
