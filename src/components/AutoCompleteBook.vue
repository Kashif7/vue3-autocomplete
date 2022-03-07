<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AutoComplete from "./AutoComplete.vue";

const store = useStore();

const searchQuery = ref("");

const filteredBooks = computed(() =>
  store.getters.queryObjectArray("books", "title", searchQuery.value)
);

const filteredBookTitles = computed(() =>
  filteredBooks.value.map(({ title, author }) => `${title} - ${author}`)
);
</script>

<template>
  <h1>Books</h1>
  <AutoComplete
    :focus-on-load="true"
    v-model="searchQuery"
    :items="filteredBookTitles"
  />
</template>

<style scoped>
</style>