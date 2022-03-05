<script setup>
</script>

<template>
  <div>
    <input id="search" type="text" />
  </div>
  <div id="list-container" class="list-container">
    <label id="validation-message"> Enter at least 3 characters. </label>

    <ul id="results-list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <label id="no-results-message"> No matching results found. </label>
  </div>
</template>

<style scoped>
input {
  border: 1px solid transparent;
  background-color: #f1f1f1;
  width: fit-content;
  padding: 10px;
  font-size: 16px;
}

input[type="text"] {
  background-color: #f1f1f1;
  width: 50%;
}

.list-container {
  padding-left: 31%;
  width: fit-content;
}
</style>