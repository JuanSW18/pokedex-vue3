import { defineComponent } from "vue";

export default defineComponent({
  name: "PokemonItem",
  props: {
    info: Object,
  },
  data() {
    return {
      pokemon: this.info,
    };
  },
  setup() {
    // const store = useStore();
  },
  methods: {
    showInfo: function () {
      this.$emit("showInfo", this.info);
    },
    addFavorite: function () {
      if (this.pokemon.cssClass === "star-default") {
        this.pokemon.cssClass = "star-yellow";
        this.$store.commit("savePokemon", this.pokemon);
      } else {
        this.pokemon.cssClass = "star-default";
        this.$store.commit("removePokemon", this.pokemon);
      }
      this.$emit("addFavorite");
    },
  },
});
