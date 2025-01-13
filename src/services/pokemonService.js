const BASE_URL = process.env.REACT_APP_API_URL;

export const fetchPokemons = async (limit = 20, offset = 0) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export const fetchPokemonDetails = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
    throw error;
  }
};
