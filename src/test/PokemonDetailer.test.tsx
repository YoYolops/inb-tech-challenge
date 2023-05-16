import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import PokemonDataContext from "../core/contexts/PokemonDataContext";
import Factory from "./Factory";
import PokemonDetailer from "../components/PokemonDetailer";

describe("Pokemon Detailer Component", () => {
    const factory = Factory();

    it("Should not render if no pokemon is selected", () => {
        const dummyContextProvider = factory.contextProviderValue();
        
        render(
            <PokemonDataContext.Provider value={dummyContextProvider}>
                <PokemonDetailer />
            </PokemonDataContext.Provider>
        )

        const detailerTitle = screen.queryByText(dummyContextProvider.pokemonData[0].name);
        expect(detailerTitle).toBe(null)
    })

    it("Should render pokemon data when selected pokemon is not empty", () => {
        const dummyContextProvider = factory.contextProviderValue();

        render(
            <PokemonDataContext.Provider value={{...dummyContextProvider, selectedPokemon: factory.pokemon()}}>
                <PokemonDetailer />
            </PokemonDataContext.Provider>
        )
        
        const detailerTitle = screen.queryByText(dummyContextProvider.pokemonData[0].name);
        expect(detailerTitle).not.toBe(null)
    })

    it("Should fire next pokemon selection function when next button is clicked", () => {
        const dummyContextProvider = factory.contextProviderValue();

        render(
            <PokemonDataContext.Provider value={{...dummyContextProvider, selectedPokemon: factory.pokemon()}}>
                <PokemonDetailer />
            </PokemonDataContext.Provider>
        )

        const nextButton = screen.getByText("»");
        expect(dummyContextProvider.getNextPokemonSelected()).toBe(false);
        fireEvent.click(nextButton)
        expect(dummyContextProvider.getNextPokemonSelected()).toBe(true);
    })

    it("Should fire previous pokemon selection function when previou button is clicked", () => {
        const dummyContextProvider = factory.contextProviderValue();

        render(
            <PokemonDataContext.Provider value={{...dummyContextProvider, selectedPokemon: factory.pokemon()}}>
                <PokemonDetailer />
            </PokemonDataContext.Provider>
        )

        const nextButton = screen.getByText("«");
        expect(dummyContextProvider.getPreviousPokemonSelected()).toBe(false);
        fireEvent.click(nextButton)
        expect(dummyContextProvider.getPreviousPokemonSelected()).toBe(true);
    })
})