import { useContext } from "react";
import PokemonDataContext from "../../contexts/PokemonDataContext";

export default function PokemonDetailer(): JSX.Element {
    const { selectNextPokemon, selectPreviousPokemon, selectedPokemon: pokemon } = useContext(PokemonDataContext);

    return (
        <div id="pokemon_detailer">
            <section>
                <img />

                <div>
                    <p>Nome do pokemon</p>
                    {/* map type badges */}
                </div>
            </section>

            <section className="stats_graphics">
                
            </section>
        </div>
    )
}