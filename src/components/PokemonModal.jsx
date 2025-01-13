import React from "react";
import { typeColors } from "../utils/typeColors";


const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  const { name, height, weight, stats, types } = pokemon;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold capitalize mb-4">{name}</h2>
        <p className="text-gray-700 mb-2">Altura: {height} dm</p>
        <p className="text-gray-700 mb-4">Peso: {weight} hg</p>
        <h3 className="text-lg font-bold mb-2">Estadísticas:</h3>
        <ul className="mb-4">
          {stats.map((stat, index) => (
            <li key={index} className="text-gray-700">
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mb-2">Tipos:</h3>
        <div className="flex gap-2">
          {types.map((type, index) => (
            <span
              key={index}
              className="px-4 py-1 rounded-full text-white"
              style={{ backgroundColor: typeColors[type.type.name] }}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
