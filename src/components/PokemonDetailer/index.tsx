import { useContext } from "react";
import { getHigherStatValue } from "../../core/helpers";
import PokemonDataContext from "../../contexts/PokemonDataContext";
import GraphicLine from "./GraphicLine";
import PokemonTypeBadge from "../PokemonTypeBadge";
import CloseIcon from "../Icons/CloseIcon";
import "./PokemonDetailer.css"

export default function PokemonDetailer(): JSX.Element {
    const {
        selectNextPokemon,
        selectPreviousPokemon,
        selectedPokemon: pokemon,
        setSelectedPokemon 
    } = useContext(PokemonDataContext);

    function closePokemonDetailer(): void {
        if(setSelectedPokemon) setSelectedPokemon(undefined);
    }

    if(!pokemon) return <></>;
    return (
        <div id="pokemon_detailer">
            <button id="close_button" onClick={closePokemonDetailer}><CloseIcon /></button>
            <section id="upper_section">
                <div id="image_container">
                    <button id="previous_button" onClick={selectPreviousPokemon}>«</button>
                    <button id="next_button" onClick={selectNextPokemon}>»</button>
                    <img src={pokemon.sprite} alt={`${pokemon.name}'s front side`} />
                </div>

                <div>
                    <p>{pokemon.name}</p>

                    <div id="type_badges_container">{
                        pokemon.types.map(typeName => <PokemonTypeBadge key={typeName} typeName={typeName}/>)
                    }</div>

                    <div id="pokemon_characteristics">
                        <div className="characteristic_cell">
                            <p className="characteristic_label">XP Base</p> <p>{pokemon.baseExperience}</p>
                        </div>
                        <div className="characteristic_cell">
                            <p className="characteristic_label">Altura</p> <p>{pokemon.height}</p>
                        </div>
                        <div className="characteristic_cell">
                            <p className="characteristic_label">Movimentos</p> <p>{pokemon.movesAmount}</p>
                        </div>
                        <div className="characteristic_cell">
                            <p className="characteristic_label">Peso</p> <p>{pokemon.weight}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="lower_section">{
                    pokemon.stats.map(stat => 
                        <GraphicLine 
                            key={stat.name}
                            label={stat.name}
                            value={stat.value}
                            maxValue={getHigherStatValue(pokemon.stats)}
                        />
                    )
            }</section>
        </div>
    )
}