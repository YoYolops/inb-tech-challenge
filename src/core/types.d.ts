export interface Stat {
    name: string, 
    value: number
}

export interface Pokemon {
    id: number,
    name: string,
    baseExperience: number,
    height: number,
    movesAmount: number,
    sprite: string,
    stats: Stat[],
    types: string[],
    weight: number
}

export interface iPokemonDataContext {
    pokemonData: Pokemon[] | undefined,
    selectNextPokemon?(): void,
    selectPreviousPokemon?(): void,
    selectedPokemon: Pokemon | undefined,
    setSelectedPokemon?: React.Dispatch<React.SetStateAction<Pokemon | undefined>>,
    getMorePokemonData?(): Promise<number>
}

export interface ColorsReference {
    background: string,
    font: string
}

export interface ColorsReferenceByPokemonType {
    poison?: ColorsReference,
    fire?: ColorsReference,
    grass?: ColorsReference,
    water?: ColorsReference,
    flying?: ColorsReference,
    bug?: ColorsReference,
    normal?: ColorsReference,
    electric?: ColorsReference,
    ground?: ColorsReference,
    fairy?: ColorsReference,
    fighting?: ColorsReference,
    psychic?: ColorsReference,
    rock?: ColorsReference,
    steel?: ColorsReference,
    ice?: ColorsReference,
    ghost?: ColorsReference,
}


export interface IconsProps {
    width?: string,
    height?: string,
    color?: string,
}