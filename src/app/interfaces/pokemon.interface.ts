export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  generation: string;
  weight: number;
  height: number;
  stats: { stat: { name: string }; base_stat: number }[];
  base_stat: number;

}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonFilter {
  generation?: string;
}
