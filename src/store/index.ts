import { createStore } from "vuex";

export interface State {
  favoriteList: string[];
}

export const store = createStore({
  state: {
    favoriteList: [],
  } as State,
  mutations: {
    savePokemon(state, pokemon) {
      state.favoriteList.push(pokemon);
    },
    removePokemon(state, pokemon) {
      state.favoriteList = state.favoriteList.filter(
        (item) => item !== pokemon
      );
    },
  },
  actions: {},
  modules: {},
});
