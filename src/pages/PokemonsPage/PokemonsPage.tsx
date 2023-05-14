import { useContext, useState } from "react"
import PokemonDataContext from "../../contexts/PokemonDataContext"
import PokemonCard from "../../components/PokemonCard";
import { Pokemon } from "../../contexts/interfaces";
import SearchBar from "../../components/SearchBar";
import "./PokemonsPage.css";

export default function PokemonsPage(): JSX.Element {
    const { pokemonData } = useContext(PokemonDataContext);
    const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);



    return (
        <>
            <SearchBar 
                setFilteredPokemonData={setFilteredPokemonData}
            />
            <main id="pokemons_page_container">
                {filteredPokemonData?.map((pokemon: Pokemon) => <PokemonCard data={pokemon}/>)}
            </main>
        </>
    )
}