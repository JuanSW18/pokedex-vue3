import { defineComponent } from "vue";
import LoadingBg from "@/components/LoadingBg/LoadingBg.vue";
import PokemonItem from "@/components/PokemonItem/PokemonItem.vue";
import ModalPokemonInfo from "@/components/ModalPokemonInfo/ModalPokemonInfo.vue";
import PokedexService from "@/services/pokedex.service";
import { IPokemon } from "@/interfaces/pokemon.interface";

export default defineComponent({
  name: "Search",
  components: {
    ModalPokemonInfo,
    LoadingBg,
    PokemonItem,
  },
  data() {
    return {
      showModal: false,
      isLoading: false,
      btnActive: "",
      pokemonName: "",
      pokemonList: [],
      pokemonFullList: [],
      pokemonData: {},
    };
  },
  created() {
    new PokedexService().getPokemonList().then(
      (response) => {
        this.pokemonFullList = response.data.results;
        this.pokemonFullList.forEach(
          (item) => (item.cssClass = "star-default")
        );
        this.pokemonList = [...this.pokemonFullList];
      },
      () => {
        console.error("Pokedex API conection error!");
      }
    );
  },
  computed: {},
  methods: {
    reset() {
      this.pokemonName = "";
      this.btnActive = "";
      this.pokemonList = [...this.pokemonFullList];
    },
    isBtnActive(btn: string) {
      const cssStyle = this.btnActive === btn ? "btn-danger" : "btn-secondary";
      return cssStyle;
    },
    showFullList() {
      this.pokemonName = "";
      this.btnActive = "primary";
      this.pokemonList = [...this.pokemonFullList];
    },
    showFavoriteList() {
      this.pokemonName = "";
      this.btnActive = "secondary";
      this.pokemonList = this.$store.state.favoriteList;
    },
    onPokemonItemChange() {
      if (this.btnActive === "secondary") {
        this.pokemonList = this.$store.state.favoriteList;
        return;
      }
    },
    searchPokemon() {
      const searchStarted = this.pokemonName.length > 0;
      if (searchStarted) {
        this.btnActive = "";
        this.pokemonList = this.pokemonFullList.filter((item) =>
          item.name.includes(this.pokemonName)
        );
      } else {
        this.reset();
      }
    },
    showPokemonInfo(pokemon: IPokemon) {
      this.isLoading = true;
      new PokedexService().getPokemonDetail(pokemon.name).then(
        (response) => {
          response.data["class"] = pokemon.cssClass;
          this.pokemonData = response.data;
          setTimeout(() => {
            this.isLoading = false;
            this.showModal = true;
          }, 200);
        },
        () => {
          this.isLoading = false;
          console.error("Pokemon information doesn't found!");
        }
      );
    },
  },
});
