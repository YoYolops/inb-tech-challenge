export default function DataService() {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    const maxDataAmount = 1281;
    let loadedAmount: number = 0;

    async function loadPokemonData() {
        const promises = []
        let from: number = loadedAmount + 1;
        let to: number = from + 50;

        if(from > maxDataAmount) return;
        if(to > maxDataAmount) to = maxDataAmount; 

        for(let i = from; i <= to; i++) {
            promises.push(fetch(`${baseUrl}/${i}`).then(response => response.json()))
        }

        const pokemonData = await Promise.all(promises);
        const formattedPokemonData = pokemonData.map(data => ({
            // criar função util para formatar
            id: data.id,
            name: data.name,
            baseExperience: data.base_experience,
            height: data.height,
            movesAmount: data.moves.length,
            sprite: data.sprites.front_default,
            stats: data.stats.map((stat: any) => ({name: stat.stat.name, value: stat.base_stat})),
            types: data.types.map((type: any) => (type.type.name)),
            weight: data.weight
        }))

        loadedAmount += formattedPokemonData.length;
        return formattedPokemonData;
    }

    return {

    }
}