import { IPokemonType } from "@/interfaces/pokemon.interface";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalPokemonInfo",
  props: {
    info: Object,
  },
  data() {
    return {
      pokemonData: {
        name: "",
        weight: 0,
        height: 0,
        types: "",
        class: "",
      },
    };
  },
  watch: {
    info() {
      const types: string[] = [];
      this.info.types.forEach((item: IPokemonType) =>
        types.push(item.type.name)
      );
      this.pokemonData.types = types.join(", ");
      this.pokemonData.weight = this.info.weight;
      this.pokemonData.height = this.info.height;
      this.pokemonData.name = this.info.name;
      this.pokemonData.class = this.info.class;
    },
  },
  methods: {
    close: function () {
      this.$emit("clicked", "");
    },
    sharedInfo: function () {
      const clipboardData = navigator.clipboard;
      const text = this.pokemonData.name + " (" + this.pokemonData.types + ")";
      clipboardData.writeText(text);
    },
  },
});
