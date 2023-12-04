import { defineComponent } from "vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import PokemonPicture from "../components/PokemonPicture.vue";
import { usePokemons } from "../composables/usePokemons";

export default defineComponent({
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  setup: () => {
    const {
      pokemonArr,
      pokemon,
      showAnswer,
      showPokemon,
      message,
      mixPokemonArray,
      checkAnswer,
      newGame,
    } = usePokemons();

    mixPokemonArray();

    return {
      //! Properties
      pokemonArr,
      pokemon,
      showPokemon,
      showAnswer,
      message,

      //! Methods
      mixPokemonArray,
      checkAnswer,
      newGame,
    };
  },
});
