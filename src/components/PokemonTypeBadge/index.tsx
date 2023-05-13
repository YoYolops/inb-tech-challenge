import "./PokemonTypeBadge.css";

interface Props {
    typeName: string
}

interface ColorsReference {
    background: string,
    font: string
}

const colorsReferenceByPokemonType: any = {
    poison: {background: "#b97fc9", font: "white"},
    fire: {background: "#fd7d24", font: "white"},
    grass: {background: "#9bcc50", font: "black"},
    water: {background: "#4592c4", font: "white"},
    flying: {background: "#3dc7ef", font: "black"},
    bug: {background: "#729f3f", font: "white"},
    normal: {background: "#a4acaf", font: "black"},
    electric: {background: "#eed535", font: "black"},
    ground: {background: "#ab9842", font: "black"},
    fairy: {background: "#fdb9e9", font: "black"},
    fighting: {background: "#d56723", font: "white"},
    psychic: {background: "#f366b9", font: "white"},
    rock: {background: "#a38c21", font: "white"},
    steel: {background: "#9eb7b8", font: "black"},
    ice: {background: "#51c4e7", font: "black"},
    ghost: {background: "#7b62a3", font: "white"},
}

export default function PokemonTypeBadge(props: Props): JSX.Element {
    function getColorByPokemonType(typeName: string): ColorsReference {
        if(!colorsReferenceByPokemonType[typeName]) return {
            background: "black",
            font: "white"
        }
        return colorsReferenceByPokemonType[typeName];
    }

    return (
        <p
        className="pokemon_type_badge_text" 
        style={{
            backgroundColor: getColorByPokemonType(props.typeName).background ?? "black",
            color: getColorByPokemonType(props.typeName).font ?? "black",
        }}>{props.typeName}</p>
    )
}