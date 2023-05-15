import "./PokemonTypeBadge.css";
import { getColorByPokemonType } from "../../core/helpers";

interface Props {
    typeName: string
}

export default function PokemonTypeBadge(props: Props): JSX.Element {
    return (
        <p
        className="pokemon_type_badge_text" 
        style={{
            backgroundColor: getColorByPokemonType(props.typeName).background ?? "black",
            color: getColorByPokemonType(props.typeName).font ?? "black",
        }}>{props.typeName}</p>
    )
}