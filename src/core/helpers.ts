import { Stat, ColorsReference, ColorsReferenceByPokemonType } from "./types";

// Torna a primeira letra de cada palavra maiúscula
export function capitalizeString(str: string): string {
    const splittedString = str.split(" ");
    let capitalizedString = "";

    for(const subString of splittedString) {
        capitalizedString += subString[0].toUpperCase() + subString.slice(1, subString.length) + " ";
    }
    return capitalizedString.trim();
}

export function getHigherStatValue(stats: Stat[]): number {
    let maxValueFound = 0;
    for(const stat of stats) if (stat.value > maxValueFound) maxValueFound = stat.value;
    return maxValueFound;
}

export function getColorByPokemonType(typeName: string): ColorsReference {
    const colorsReferenceByPokemonType: ColorsReferenceByPokemonType | any = {
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

    if(!colorsReferenceByPokemonType[typeName]) return {
        background: "#3f3f3f",
        font: "white"
    }
    return colorsReferenceByPokemonType[typeName];
}