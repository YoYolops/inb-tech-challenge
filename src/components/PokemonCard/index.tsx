import { Pokemon } from "../../core/types"
import PokemonTypeBadge from "../PokemonTypeBadge";
import { useContext } from "react";
import PokemonDataContext from "../../contexts/PokemonDataContext";
import "./PokemonCard.css"

interface Props {
    data: Pokemon
}

function handlePokemonCardSelection(pokemonData: Pokemon, setter: Function): void {
    setter(pokemonData)
}

export default function PokemonCard(props: Props): JSX.Element {
    const { data: pokemon } = props;
    const { setSelectedPokemon, selectedPokemon } = useContext(PokemonDataContext);

    return (
        <div 
            className="pokemon_card" 
            onClick={() => handlePokemonCardSelection(pokemon, setSelectedPokemon ?? (() => {}))}
            style={{ border: selectedPokemon?.id === pokemon.id ? "2px solid #006d4a" : "none"}}
        >
            <img src={pokemon.sprite} alt={`${pokemon.name}'s sprite`} />
            <section className="pokemon_card_preview_info">
                <h3>{`${pokemon.id} - ${pokemon.name}`}</h3>
                <div>{pokemon.types.map(typeName => <PokemonTypeBadge key={typeName} typeName={typeName}/>)}</div>
            </section>
        </div>
    )
}