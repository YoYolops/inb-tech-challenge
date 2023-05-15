// Torna a primeira letra de cada palavra maiúscula
export function capitalizeString(str: string): string {
    const splittedString = str.split(" ");
    let capitalizedString = "";

    for(const subString of splittedString) {
        capitalizedString += subString[0].toUpperCase() + subString.slice(1, subString.length) + " ";
    }
    return capitalizedString.trim();
}