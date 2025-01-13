import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import PokemonModal from "../components/PokemonModal";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter"; // Importamos el filtro
import { fetchPokemons,fetchPokemonDetails } from "../services/pokemonService";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado para el modal
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [attackRange, setAttackRange] = useState({ from: "", to: "" });
  const [defenseRange, setDefenseRange] = useState({ from: "", to: "" });

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(151); // Traemos 151 Pokémon iniciales
        const pokemonsWithDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const details = await fetchPokemonDetails(pokemon.name);
            return { ...pokemon, details }; // Agregamos los detalles al objeto
          })
        );
        setPokemons(pokemonsWithDetails);
        setFilteredPokemons(pokemonsWithDetails);
      } catch (error) {
        console.error("Error loading Pokémon:", error);
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

        {/* Lista de Pokémon */}
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
