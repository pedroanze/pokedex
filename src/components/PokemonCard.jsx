import React, { useEffect, useState } from "react";
import { typeColors } from "../utils/typeColors";

const PokemonCard = ({ name, url, onClick }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchDetails();
  }, [url]);

  return (
    <div
      className="flex flex-row items-center rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer overflow-hidden"
      onClick={() => onClick(pokemonDetails)}
      style={{
        backgroundColor: pokemonDetails
          ? typeColors[pokemonDetails.types[0].type.name]
          : "#ddd",
      }}
    >
      {/* Sección de imagen */}
      <div
        className="flex justify-center items-center w-1/3 p-4"
        style={{
          backgroundColor: pokemonDetails
            ? typeColors[pokemonDetails.types[0].type.name]
            : "#ddd",
        }}
      >
        {pokemonDetails ? (
          <img
            src={pokemonDetails.sprites.front_default}
            alt={name}
            className="w-24 h-24 lg:w-32 lg:h-32 object-contain"
          />
        ) : (
          <p className="text-white">Cargando...</p>
        )}
      </div>

      {/* Sección de contenido */}
      <div className="flex flex-col w-2/3 bg-white p-4">
        {/* Nombre */}
        <h2 className="text-lg lg:text-xl font-bold capitalize text-gray-800">
          {name}
        </h2>

        {/* Tipos */}
        <div className="flex gap-2 mt-2">
          {pokemonDetails &&
            pokemonDetails.types.map((type, index) => (
              <div
                key={index}
                className="px-3 py-1 text-xs lg:text-sm font-medium rounded-full text-white"
                style={{
                  backgroundColor: typeColors[type.type.name],
                  boxShadow: `inset 0 -2px 0 rgba(0, 0, 0, 0.18)`,
                }}
              >
                {type.type.name}
              </div>
            ))}
        </div>

        {/* Estadísticas */}
        <div className="flex gap-4 mt-4">
          {pokemonDetails &&
            ["attack", "defense"].map((statName, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1 text-center"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-gray-800 rounded-full flex justify-center items-center">
                  <span className="text-sm lg:text-base font-bold text-gray-800">
                    {
                      pokemonDetails.stats.find((stat) => stat.stat.name === statName)
                        ?.base_stat
                    }
                  </span>
                </div>
                <span className="text-xs lg:text-sm text-gray-600 capitalize">
                  {statName}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
