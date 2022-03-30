const fetchPokemon = async (pokemonName) => {
    const name = pokemonName !== '' ? pokemonName : "pikachu";
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await res.json();
}

export default fetchPokemon;