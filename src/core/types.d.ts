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
    setSelectedPokemon?: React.Dispatch<React.SetStateAction<Pokemon | undefined>>
}