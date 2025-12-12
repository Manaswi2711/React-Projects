import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByNameQuery } from "../../services/pokemonApi";
import "./PokemonDetails.css";

function PokemonDetails() {
  const { name } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <div className="pokemon-details-container">
      <h1>{data.name.toUpperCase()}</h1>
      <img src={data.sprites.front_default} alt={data.name} />

      <h3>Height: {data.height}</h3>
      <h3>Weight: {data.weight}</h3>

      <h3>Abilities:</h3>
      <ul>
        {data.abilities.map((ab) => (
          <li >{ab.ability.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;
