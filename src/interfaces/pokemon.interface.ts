export interface IPokemon {
  name: string;
  weight: number;
  height: number;
  types: IPokemonType[];
  cssClass: string;
}

export interface IPokemonType {
  slot: number;
  type: {
    name: string;
  };
}
