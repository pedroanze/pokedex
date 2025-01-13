import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Busca un Pokémon por su nombre o número..."
      className="w-full px-4 py-4 rounded-lg border border-gray-300 shadow-md text-gray-800"
    />
  );
};

export default SearchBar;
