<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AutoComplete from "./AutoComplete.vue";

const store = useStore();

const searchQuery = ref("");

const filteredBooks = computed(() =>
  store.getters
    .queryObjectDataArray("books", "title", searchQuery.value)
    .map(({ title, author }) => `${title} - ${author}`)
);
</script>

<template>
  <h1>Books</h1>
  <AutoComplete
    focusOnLoad="true"
    v-model="searchQuery"
    :items="filteredBooks"
  />
</template>

<style scoped>
</style>