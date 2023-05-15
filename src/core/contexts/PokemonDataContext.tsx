import { createContext, useEffect, useState } from "react";
import { Pokemon, iPokemonDataContext } from "../types";

const PokemonDataContext = createContext<iPokemonDataContext>({
    pokemonData: [],
    selectedPokemon: undefined,
});

export interface ProviderProps {
    children: JSX.Element
}

export function PokemonDataContextProvider(props: ProviderProps): JSX.Element {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();

    useEffect(() => {
        // Criar api.service para gerenciar chamadas à api
        async function loadPokemonData() {
            const baseUrl = "https://pokeapi.co/api/v2/pokemon"
            const promises = []
            for(let i = 1; i <= 50; i++) {
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
            console.log(formattedPokemonData)
            setPokemonData(formattedPokemonData);
        }
        loadPokemonData();
    }, [])

    function selectNextPokemon(): void {
        setSelectedPokemon((previousSelectedPokemon: Pokemon | undefined) => {
            if(!previousSelectedPokemon) return;

            for(let i = 0; (i+1) < pokemonData.length; i++) {
                if(pokemonData[i].id === previousSelectedPokemon.id) return pokemonData[i+1];
            }
            return previousSelectedPokemon;
        })
    }

    function selectPreviousPokemon(): void {
        setSelectedPokemon((previousSelectedPokemon: Pokemon | undefined) => {
            if(!previousSelectedPokemon) return;

            for(let i = pokemonData.length-1; (i-1) >= 0; i--) {
                if(pokemonData[i].id === previousSelectedPokemon.id) return pokemonData[i-1];
            }
            return previousSelectedPokemon;
        })
    }

    return (
        <PokemonDataContext.Provider value={{
            pokemonData,
            selectNextPokemon,
            selectPreviousPokemon,
            selectedPokemon,
            setSelectedPokemon
        }}>
            {props.children}
        </PokemonDataContext.Provider>
    )
}

export default PokemonDataContext;