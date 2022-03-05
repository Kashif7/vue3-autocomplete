<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import AutoComplete from "./AutoComplete.vue";

const store = useStore();

const searchQuery = ref("San");

const filteredCities = computed(() =>
  store.getters.queryStringDataArray("cities", searchQuery.value)
);

console.log("filteredCities", filteredCities.value);
</script>

<template>
  <h1>Cities</h1>
  <AutoComplete />
</template>

<style scoped>
</style>