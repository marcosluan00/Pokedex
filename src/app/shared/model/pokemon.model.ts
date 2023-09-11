export interface PokemonApiRequest {
  count: number;
  next: string;
  previous: string;
  results: {
    name:string;
    url: string;
  }[]
}
export interface PokemonList{
  nextPage: string;
  previousPage:string;
  detailsPokemon:Promise<Pokemon>[]
}
export interface PokemonListRequest {
  nextPage:string;
  previousPage:string;
  details: Promise<Pokemon[]>
}
export interface Pokemon {
  order: number;
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: {
    artwork_default: string;
  }
  types: string[];
  abilities: string[];
  stats: {
    value:number;
    name:string;
  }[]
}
export interface PokemonApiDetails{
  order: number;
  id: string;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: { "official-artwork": { front_default: string } }
  }
  types: { type: { name:string } }[];
  abilities: { ability: {name: string }}[];
  stats: {
    base_stat: number,
    stat: { name: string}
  }[]
}
