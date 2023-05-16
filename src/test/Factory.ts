import { Pokemon, iPokemonDataContext } from "../core/types"

export default function Factory() {
    function pokemon(): Pokemon {
        return {
            id: 13,
            name: "Chicorita",
            baseExperience: 318,
            height: 122,
            movesAmount: 32,
            sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
            stats: [
                {name: "hp", value: 12},
                {name: "attack", value: 122},
                {name: "special-attack", value: 56},
                {name: "special-defense", value: 38},
                {name: "speed", value: 99},
            ],
            types: ["fire", "ground"],
            weight: 118
        }
    }

    function contextProviderValue() {
        let selectedPokemon: Pokemon | undefined = undefined;
        let nextPokemonSelected = false;
        let previousPokemonSelected = false;
        const poke = pokemon()

        return {
            getSelectedPokemon: () => selectedPokemon,
            getPreviousPokemonSelected: () => previousPokemonSelected,
            getNextPokemonSelected: () => nextPokemonSelected,
            pokemonData: [poke],
            selectNextPokemon: () => { nextPokemonSelected = true },
            selectPreviousPokemon: () => { previousPokemonSelected = true },
            selectedPokemon,
            setSelectedPokemon: () => { selectedPokemon = poke },
            getMorePokemonData: async () => 12,
        }
    }

    return {
        pokemon,
        contextProviderValue
    }
}