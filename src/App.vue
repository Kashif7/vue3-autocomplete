<script setup>
import AutoCompleteBook from "./components/AutoCompleteBook.vue";
import AutoCompleteCity from "./components/AutoCompleteCity.vue";
import ErrorBoundary from "./components/ErrorBoundary.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <ErrorBoundary stopPropagation="true">
          <AutoCompleteBook />
        </ErrorBoundary>
      </div>
      <div class="column">
        <ErrorBoundary stopPropagation="true">
          <AutoCompleteCity />
        </ErrorBoundary>
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
