import { useContext } from "react"
import PokemonDataContext from "../../contexts/PokemonDataContext"
import PokemonCard from "../../components/PokemonCard";
import { Pokemon } from "../../contexts/interfaces";
import SearchBar from "../../components/SearchBar";
import "./PokemonsPage.css";

export default function PokemonsPage(): JSX.Element {
    const { pokemonData } = useContext(PokemonDataContext);

    return (
        <>
            <SearchBar />
            <main id="pokemons_page_container">
                {pokemonData?.map((pokemon: Pokemon) => <PokemonCard data={pokemon}/>)}
            </main>
        </>
    )
}