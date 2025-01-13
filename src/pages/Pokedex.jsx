import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import PokemonModal from "../components/PokemonModal";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { fetchPokemons, fetchPokemonDetails } from "../services/pokemonService";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); 
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [attackRange, setAttackRange] = useState({ from: "", to: "" });
  const [defenseRange, setDefenseRange] = useState({ from: "", to: "" });
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(200); 
        const pokemonsWithDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const details = await fetchPokemonDetails(pokemon.name);
            return { ...pokemon, details }; 
          })
        );
        setPokemons(pokemonsWithDetails);
        setFilteredPokemons(pokemonsWithDetails);
      } catch (error) {
        console.error("Error loading Pokémon:", error);
      } finally {
        setLoading(false); 
      }
    };
    loadPokemons();
  }, []);
  
  
  // Filtro por búsqueda, tipo, ataque y defensa
  useEffect(() => {
    let filtered = pokemons;

    if (search) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  
    if (filterType) {
      filtered = filtered.filter(
        (pokemon) =>
          pokemon.details &&
          pokemon.details.types.some((type) => type.type.name === filterType)
      );
    }

    if (attackRange.from || attackRange.to) {
      filtered = filtered.filter((pokemon) => {
        const attack = pokemon.details?.stats.find(
          (stat) => stat.stat.name === "attack"
        )?.base_stat;
        return (
          (!attackRange.from || attack >= parseInt(attackRange.from, 10)) &&
          (!attackRange.to || attack <= parseInt(attackRange.to, 10))
        );
      });
    }
  
    if (defenseRange.from || defenseRange.to) {
      filtered = filtered.filter((pokemon) => {
        const defense = pokemon.details?.stats.find(
          (stat) => stat.stat.name === "defense"
        )?.base_stat;
        return (
          (!defenseRange.from || defense >= parseInt(defenseRange.from, 10)) &&
          (!defenseRange.to || defense <= parseInt(defenseRange.to, 10))
        );
      });
    }
  
    setFilteredPokemons(filtered);
  }, [search, filterType, attackRange, defenseRange, pokemons]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 pb-10 pt-28 lg:pt-32 flex flex-col gap-6">
        {/* Título */}
        <h1 className="text-5xl text-gray-800 text-center">
          ¡Conoce a tus <span className="font-bold">Pokémons</span> favoritos!
        </h1>

        {/* Buscador y Filtro */}
        <div className="flex flex-col gap-6 justify-center items-center">
          <SearchBar search={search} setSearch={setSearch} />
          <Filter
            onTypeFilter={setFilterType}
            onRangeFilter={(attack, defense) => {
              setAttackRange(attack);
              setDefenseRange(defense);
            }}
          />
        </div>

        {/* Lista de Pokémon o Spinner */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div role="status">
              <svg
                className="animate-spin"
                width="80px"
                height="80px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                  fill="#6B7280"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : filteredPokemons.length === 0 ? (
          <div className="text-center text-gray-500 font-medium mt-10">
            No se encontraron pokémones.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPokemons.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                url={pokemon.url}
                onClick={setSelectedPokemon} // Pasa el estado del modal
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal para mostrar detalles del Pokémon */}
      {selectedPokemon && (
        <PokemonModal
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};

export default Pokedex;
