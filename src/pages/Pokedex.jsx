import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import PokemonModal from "../components/PokemonModal";
import SearchBar from "../components/SearchBar";
import { fetchPokemons } from "../services/pokemonService";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Estado para el modal
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const loadPokemons = async () => {
      try {
        const data = await fetchPokemons(151); // Traemos 151 Pokémon iniciales
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      } catch (error) {
        console.error("Error loading Pokémon:", error);
      }
    };
    loadPokemons();
  }, []);

  // Filtro por búsqueda y tipo
  useEffect(() => {
    let filtered = pokemons;

    if (search) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (filterType) {
      // luego poner filtrops
    }

    setFilteredPokemons(filtered);
  }, [search, filterType, pokemons]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-100">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto px-4 pb-10 pt-28 lg:pt-32 flex flex-col gap-6">
        {/* Título */}
        <h1 className="text-5xl text-gray-800 text-center">
          ¡Conoce a tus <span className="font-bold">Pokémons</span> favoritos!
        </h1>

        {/* Buscador y Filtro */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
          <SearchBar search={search} setSearch={setSearch} />
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-md text-gray-800"
          >
            <option value="">Todos los tipos</option>
            <option value="grass">Grass</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
          </select>
        </div>

        {/* Lista de Pokémon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
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
