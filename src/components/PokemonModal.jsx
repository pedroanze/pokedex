import React from "react";
import { typeColors } from "../utils/typeColors";
import { FiX } from "react-icons/fi";

const PokemonModal = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  const { name, height, weight, stats, types, abilities, id, base_experience } =
    pokemon;

  // Obtener estadísticas específicas
  const hpStat = stats.find((stat) => stat.stat.name === "hp")?.base_stat || 0;
  const formattedHeight = (height / 10).toFixed(1); // Altura en metros
  const formattedWeight = (weight / 10).toFixed(1); // Peso en kg

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[90%] max-w-3xl bg-gradient-to-b from-[#722019] to-[#d93e30] rounded-2xl shadow-lg overflow-hidden relative">
        {/* Botón cerrar */}
        <button
          className="absolute top-2 right-3 text-black text-3xl z-50 md:top-4 md:right-6"
          onClick={onClose}
        >
          <FiX />
        </button>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row">
          {/* Imagen */}
          <div
            className="w-full lg:w-1/2 flex justify-center items-center relative group"
            style={{
              backgroundColor: typeColors[types[0].type.name],
            }}
          >
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={name}
              className="w-3/4 max-h-64 lg:max-h-96 object-contain transition-transform transform group-hover:scale-110"
            />
            {/* Tipos */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {types.map((type, index) => (
                <span
                  key={index}
                  className="px-4 py-1 text-sm font-medium text-white rounded-full border border-white"
                  style={{
                    backgroundColor: typeColors[type.type.name],
                  }}
                >
                  {type.type.name}
                </span>
              ))}
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col gap-2 p-6 w-full lg:w-1/2 bg-white">
            {/* Nombre y número */}
            <div className="flex items-center justify-between lg:mt-4">
              <h2 className="text-3xl font-bold capitalize">{name}</h2>
              <span className="text-lg text-gray-400 font-medium">
                #{id.toString().padStart(3, "0")}
              </span>
            </div>

            {/* Altura y peso */}
            <div className="flex gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-600">Altura</h4>
                <p className="text-lg font-bold text-gray-800">
                  {formattedHeight} m
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-600">Peso</h4>
                <p className="text-lg font-bold text-gray-800">
                  {formattedWeight} kg
                </p>
              </div>
            </div>
            {/* Habilidades */}
            <div className="bg-gray-100 rounded-lg p-3">
              <h4 className="text-base font-medium text-gray-600">
                Habilidades
              </h4>
              <p className="text-sm font-bold text-gray-800">
                {abilities.map((ability) => ability.ability.name).join(", ")}
              </p>
            </div>

            <div>
              {/* HP */}
              <div>
                <h4 className="text-sm font-medium text-gray-600">HP</h4>
                <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-6 bg-green-500"
                    style={{ width: `${hpStat}%` }}
                  ></div>
                </div>
                <p className="text-center mt-1 font-medium">{hpStat}</p>
              </div>

              {/* Experiencia */}
              {base_experience && (
                <div>
                  <h4 className="text-sm font-medium text-gray-600 mb-2">
                    Experiencia
                  </h4>
                  <div className="relative w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                    <div
                      className="absolute top-0 left-0 h-6 bg-yellow-500"
                      style={{ width: `${base_experience / 3}%` }}
                    ></div>
                  </div>
                  <p className="text-center mt-1 font-medium">
                    {base_experience}
                  </p>
                </div>
              )}
            </div>

            {/* Estadísticas */}
            <div className="flex justify-around">
              {["attack", "defense", "special-attack", "special-defense"].map(
                (statName, index) => {
                  const statValue =
                    stats.find((stat) => stat.stat.name === statName)
                      ?.base_stat || 0;

                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1 text-center mt-2"
                    >
                      <div className="w-10 h-10 lg:w-12 lg:h-12 border-2 border-gray-800 rounded-full flex justify-center items-center">
                        <span className="text-sm lg:text-base font-bold text-gray-800">
                          {statValue}
                        </span>
                      </div>
                      <span className="text-xs lg:text-sm text-gray-600 capitalize">
                        {statName
                          .replace("special-attack", "SP Attack")
                          .replace("special-defense", "SP Defense")}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
