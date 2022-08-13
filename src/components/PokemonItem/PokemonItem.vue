<template>
  <div class="d-flex flex-row justify-content-between card my-2">
    <p class="pokemonName my-auto ms-4" @click="showInfo()">
      {{ pokemon.name }}
    </p>
    <div
      class="my-2 me-4"
      :class="pokemon.cssClass"
      @click="addFavorite()"
    ></div>
  </div>
</template>

<style src="@/static/style.css"></style>

<script lang="ts" src="./PokemonItem"></script>
