// import { IPokemon } from "@/interfaces/pokemon.interface";
import axios from "axios";

export default class PokedexService {
  getPokemonList() {
    const url = "https://pokeapi.co/api/v2/pokemon";
    const response = axios.get(url);
    return response;
  }

  getPokemonDetail(pokemonName: string) {
    const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonName;
    const response = axios.get(url);
    return response;
  }
}
