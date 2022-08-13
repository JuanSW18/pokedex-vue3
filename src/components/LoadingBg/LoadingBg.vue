<template>
  <div class="modal loading">
    <img alt="loading" class="loading-start" src="@/assets/Loader.svg" />
  </div>
</template>

<style src="./LoadingBg.css"></style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingBg",
});
</script>
