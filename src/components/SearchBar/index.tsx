import "./SearchBar.css";
import SearchIcon from "../Icons/SearchIcon";
import { Pokemon } from "../../core/types";
import { useContext, useEffect, useState } from "react";
import PokemonDataContext from "../../core/contexts/PokemonDataContext";

interface Props {
    setFilteredPokemonData: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>,
}

function performSearch(
    searchInputString: string, 
    pokemonData: Pokemon[] | undefined,
    stateSetter: React.Dispatch<React.SetStateAction<Pokemon[] | undefined>>
): void {
    stateSetter(
        pokemonData?.filter((pokemon: Pokemon) => 
            pokemon.name
                .toLowerCase()
                .search(searchInputString.toLowerCase()) >= 0
        )
    )
}

export default function SearchBar({setFilteredPokemonData}: Props): JSX.Element {
    const { pokemonData } = useContext(PokemonDataContext);
    const [ searchInputString, setSearchInputString ] = useState<string>("");

    useEffect(() => {
        performSearch(searchInputString, pokemonData, setFilteredPokemonData);
    }, [pokemonData, searchInputString, setFilteredPokemonData])

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setSearchInputString(event.target.value);
    }

    return (
            <form 
                className="search_bar_container"
                onSubmit={() => performSearch(searchInputString, pokemonData, setFilteredPokemonData)}
            >
                <button type="submit">
                    <SearchIcon height="32px" width="32px" color="#00B77E" />
                </button>

                <input 
                    type="text"
                    name="searchInput"
                    placeholder="Buscar pokemon"
                    autoComplete="off"
                    onChange={handleInputChange}
                />
            </form>
    )
}