import { useContext } from "react";
import { Stat } from "../../core/types";
import PokemonDataContext from "../../contexts/PokemonDataContext";
import GraphicLine from "./GraphicLine";
import PokemonTypeBadge from "../PokemonTypeBadge";
import "./PokemonDetailer.css"

function getHigherStatValue(stats: Stat[]): number {
    let maxValueFound = 0;
    for(const stat of stats) if (stat.value > maxValueFound) maxValueFound = stat.value;
    return maxValueFound;
}


export default function PokemonDetailer(): JSX.Element {
    const { selectNextPokemon, selectPreviousPokemon, selectedPokemon: pokemon } = useContext(PokemonDataContext);

    return (
        <div id="pokemon_detailer">
            <section id="upper_section">
                <img src={pokemon?.sprite} alt={`${pokemon?.name}'s front side`}/>

                <div>
                    <p>{pokemon?.name}</p>

                    <div id="type_badges_container">
                        {
                            pokemon?.types.map(typeName => <PokemonTypeBadge key={typeName} typeName={typeName}/>)
                        }
                    </div>

                    <div id="pokemon_characteristics">
                        <div className="characteristic_cell">
                            <p className="characteristic_label">XP Base</p> <p>{pokemon?.baseExperience}</p>
                        </div>
                        <div className="characteristic_cell">
                            <p className="characteristic_label">Altura</p> <p>{pokemon?.height}</p>
                        </div>
                        <div className="characteristic_cell">
                            <p className="characteristic_label">Movimentos</p> <p>{pokemon?.movesAmount}</p>
                        </div>
                        <div className="characteristic_cell">
                            <p className="characteristic_label">Peso</p> <p>{pokemon?.weight}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div>
            {
                pokemon?.stats.map(stat => 
                    <GraphicLine 
                        key={stat.name}
                        label={stat.name}
                        value={stat.value}
                        maxValue={getHigherStatValue(pokemon.stats)}
                    />
                )
            }
        </div>
        </div>
    )
}