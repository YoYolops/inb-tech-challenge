import { createContext, useEffect, useState } from "react";
import { ProviderProps, Pokemon, iPokemonDataContext } from "./interfaces";

const PokemonDataContext = createContext<iPokemonDataContext>({});

export function PokemonDataContextProvider(props: ProviderProps): JSX.Element {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])

    useEffect(() => {
        async function loadPokemonData() {
            const baseUrl = "https://pokeapi.co/api/v2/pokemon"
            const promises = []
            for(let i = 1; i <= 50; i++) {
                promises.push(fetch(`${baseUrl}/${i}`).then(response => response.json()))
            }

            const pokemonData = await Promise.all(promises);
            const formattedPokemonData = pokemonData.map(data => ({
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
            console.log(formattedPokemonData)
            setPokemonData(formattedPokemonData);
        }
        loadPokemonData();
    }, [])

    return (
        <PokemonDataContext.Provider value={{
            pokemonData,
        }}>
            {props.children}
        </PokemonDataContext.Provider>
    )
}

export default PokemonDataContext;