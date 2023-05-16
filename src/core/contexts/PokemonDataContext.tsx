import { createContext, useEffect, useState } from "react";
import { Pokemon, iPokemonDataContext } from "../types";
import DataService from "../services/data.service";

const PokemonDataContext = createContext<iPokemonDataContext>({
    pokemonData: [],
    selectedPokemon: undefined,
    setSelectedPokemon: () => {},
    selectPreviousPokemon: () => {},
    selectNextPokemon: () => {}
});

export interface ProviderProps {
    children: JSX.Element
}

const dataService = DataService();

export function PokemonDataContextProvider(props: ProviderProps): JSX.Element {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>();

    useEffect(() => {
        async function loadDataWrapper() {
            const pokemonData = await dataService.loadPokemonData();
            setPokemonData(prev => ([...prev, ...(dataService.formatPokemonData(pokemonData))]))
        }
        loadDataWrapper();
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

    async function getMorePokemonData(): Promise<number> {
        const pokemonData = await dataService.loadPokemonData();
        // Retorna false quando todos os pokemons já foram carregados

        setPokemonData(prev => ([...prev, ...(dataService.formatPokemonData(pokemonData))]))
        return pokemonData[pokemonData.length-1].id;
    }

    return (
        <PokemonDataContext.Provider value={{
            pokemonData,
            selectNextPokemon,
            selectPreviousPokemon,
            selectedPokemon,
            setSelectedPokemon,
            getMorePokemonData
        }}>
            {props.children}
        </PokemonDataContext.Provider>
    )
}

export default PokemonDataContext;