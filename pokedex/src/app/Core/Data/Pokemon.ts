export interface Pokemon{
    id: string;
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
export interface PokemonApiType {
    count: number;
    next: string;
    previous: string;
    results: {
      name: string;
      url: string
    }[]
}
export interface PokemonList {
  nextPage: string;
  previousPage:string;
  detailsPokemon: Promise<PokemonOne>[]
}



export interface PokemonOne {
  order:number;
  name: string;
  height:number;
  weight:number;
  sprites: {
    artwork_default: string
  }
  types: string[];
  abilities: string[];
  stats: {
    value: number;
    name: string
  }[]
}

export interface PokemonApiDetails {
  order: number;
  name: string;
  height: number;
  weight: number;
  sprites: { other: { "official-artwork": { front_default: string } } }
  types: { type: { name: string } }[]
  abilities: { ability: { name: string } }[]
  stats: {
      base_stat: number,
      stat: { name: string }
  }[]
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
