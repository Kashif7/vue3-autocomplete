<script setup>
import BookAutoComplete from "./components/BookAutoComplete.vue";
import CityAutoComplete from "./components/CityAutoComplete.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <BookAutoComplete />
      </div>
      <div class="column">
        <CityAutoComplete />
      </div>
    </div>
  </div>
</template>


<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.row {
  display: flex;
}

.column {
  flex: 50%;
}
</style>
