import { useState, useContext } from "react";
import PokemonDataContext from "../../core/contexts/PokemonDataContext";
import "./DataLoaderButton.css";
import LoadingSpinner from "../Icons/LoadingSpinner";

export default function DataLoaderButton(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [areAllPokemonsLoaded, setAreAllPokemonsLoaded] = useState<boolean>(false);
    const { getMorePokemonData, pokemonData } = useContext(PokemonDataContext);

    async function loadMoreData(): Promise<void> {
        const LAST_POKEMON_ID = 1010;
        if(!getMorePokemonData) return;

        setIsLoading(true)
        const lastLoadedPokemonId = await getMorePokemonData();
        if(lastLoadedPokemonId >= LAST_POKEMON_ID) setAreAllPokemonsLoaded(true);
        setIsLoading(false);
    }

    if(areAllPokemonsLoaded || !pokemonData?.length) return <></>
    return (
        <button
            id="load_more_data_button"
            disabled={isLoading}
            onClick={loadMoreData}
        >
            {isLoading ? <LoadingSpinner /> : "Carregar mais Pokémons"}
        </button>
    )
}