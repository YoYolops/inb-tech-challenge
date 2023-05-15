import { useContext, useState } from "react"
import PokemonDataContext from "../../core/contexts/PokemonDataContext"
import PokemonCard from "../../components/PokemonCard";
import { Pokemon } from "../../core/types";
import SearchBar from "../../components/SearchBar";
import PokemonDetailer from "../../components/PokemonDetailer";
import "./PokemonsPage.css";

export default function PokemonsPage(): JSX.Element {
    const { pokemonData } = useContext(PokemonDataContext);
    const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);

    return (
        <>
            <header id="pokemons_page_header">
                <img 
                    src="https://www.nicolasbueno.com/wp-content/uploads/2017/04/inb-logo.png"
                    alt="Logomarca Instituto Nicolas Bueno"
                />
                <h1>Pokedex˼</h1>
            </header>
            
            <SearchBar setFilteredPokemonData={setFilteredPokemonData} />

            <main id="pokemons_page_main">
                {filteredPokemonData?.map((pokemon: Pokemon) => <PokemonCard key={pokemon.id} data={pokemon}/>)}
            </main>
            
            <PokemonDetailer />
        </>
    )
}