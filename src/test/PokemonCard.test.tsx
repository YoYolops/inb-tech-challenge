import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import PokemonCard from "../components/PokemonCard";
import PokemonDataContext from "../core/contexts/PokemonDataContext";
import Factory from "./Factory";

describe("Pokemon Card Component", () => {
    const factory = Factory();

    it("Should render id, image, name and types in pokemon card component", () => {
        const pokemonDummyData = factory.pokemon();
        render(<PokemonCard data={pokemonDummyData} />)
        
        expect(screen.getByText(`${pokemonDummyData.id} - ${pokemonDummyData.name}`)).toBeInTheDocument();
        expect(screen.getByAltText(`${pokemonDummyData.name}'s sprite`)).toBeInTheDocument();
        expect(screen.getByText(pokemonDummyData.types[0])).toBeInTheDocument()
        expect(screen.getByText(pokemonDummyData.types[1])).toBeInTheDocument()
    })


    it("Should fire selection function on card click", () => {
        const dummyContextProvider = factory.contextProviderValue();
        const pokemonDummyData = factory.pokemon();

        render(
            <PokemonDataContext.Provider value={dummyContextProvider}>
                <PokemonCard data={pokemonDummyData} />
            </PokemonDataContext.Provider>
        )

        const cardChildElement = screen.getByText(`${pokemonDummyData.id} - ${pokemonDummyData.name}`)

        expect(dummyContextProvider.getSelectedPokemon()).toEqual(undefined)
        fireEvent.click(cardChildElement)
        expect(dummyContextProvider.getSelectedPokemon()).not.toEqual(undefined)
    })
})