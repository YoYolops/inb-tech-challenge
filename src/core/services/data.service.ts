import { Pokemon } from "../types";

export default function DataService() {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const maxDataAmount = 1011;
    let loadedAmount: number = 0;

    async function loadPokemonData(): Promise<Pokemon[] > {
        const promises = []
        const paginationChunk = 50;
        let from: number = loadedAmount + 1;
        let to: number = from + paginationChunk;

        if(from > maxDataAmount) return [];
        if(to > maxDataAmount) to = maxDataAmount; 

        for(let i = from; i < to; i++) {
            promises.push(fetch(`${baseUrl}/${i}`)
                .then(response => response.json())
                .catch((error) => {
                    console.error(`Error while fetching: ${baseUrl}/${i}`)
                    return { isValid: false }
                }))
        }

        loadedAmount += paginationChunk;
        const pokemonData = await Promise.all(promises);
        return pokemonData;
    }

    function formatPokemonData(pokemonData: any): Pokemon[] {
        const formattedPokemonData: Pokemon[] = [];

        pokemonData.forEach((data: any) => {
            if(data.isValid === false) return;
            formattedPokemonData.push({
                id: data.id,
                name: data.name,
                baseExperience: data.base_experience,
                height: data.height,
                movesAmount: data.moves.length,
                sprite: data.sprites.front_default,
                stats: data.stats.map((stat: any) => ({name: stat.stat.name, value: stat.base_stat})),
                types: data.types.map((type: any) => (type.type.name)),
                weight: data.weight
            })
        })
        return formattedPokemonData;
    }

    return {
        loadPokemonData,
        formatPokemonData
    }
}