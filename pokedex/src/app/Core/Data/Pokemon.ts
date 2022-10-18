export interface Pokemon{
    name: string;
    url: string;
    detailsPokemon: DETAILSPOKEMON;
}
export interface DETAILSPOKEMON{
    height: number;
    weight: number;
    baseStatus: BASESTATUS[];
    abilities: string[];
    sprites: string;
    types: string[];
}
interface BASESTATUS{
    baseStatus: number;
    statName: string;
}
// interface SPRINTES{
//     officialArtwork: string;
// }
interface TYPES{
    type: string;
}
