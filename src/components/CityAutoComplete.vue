<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import AutoComplete from "./AutoComplete.vue";

const store = useStore();

const searchQuery = ref("");

const filteredCities = computed(() =>
  store.getters.queryStringDataArray("cities", searchQuery.value)
);
</script>

<template>
  <h1>Cities</h1>
  <AutoComplete v-model="searchQuery" :items="filteredCities" />
</template>

<style scoped>
</style>