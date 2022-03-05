<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import AutoComplete from "./AutoComplete.vue";

const store = useStore();

const searchQuery = ref("Don");

const filteredBooks = computed(() =>
  store.getters.queryObjectDataArray("books", "title", searchQuery.value)
);

console.log("filteredBooks", filteredBooks.value);
</script>

<template>
  <h1>Books</h1>
  <AutoComplete />
</template>

<style scoped>
</style>