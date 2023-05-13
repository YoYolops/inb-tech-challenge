import { Pokemon } from "../../contexts/interfaces"
import PokemonTypeBadge from "../PokemonTypeBadge";
import "./PokemonCard.css"

interface Props {
    data: Pokemon
}

export default function PokemonCard(props: Props): JSX.Element {
    const { data: pokemon } = props;

    return (
        <div id="pokemon_card">
            <img src={pokemon.sprite} alt={`${pokemon.name}'s sprite`} />
            <section className="pokemon_card_preview_info">
                <h3>{`${pokemon.id} - ${pokemon.name}`}</h3>
                <div>{pokemon.types.map(typeName => <PokemonTypeBadge typeName={typeName}/>)}</div>
            </section>
        </div>
    )
}