
<script setup>
import { defineProps, defineEmits, computed } from "vue";
import { vFocus } from "../directives/vFocus";

const props = defineProps({
  focusOnLoad: Boolean,
  modelValue: String,
  items: Array,
});

defineEmits(["update:modelValue"]);

const showValidationMessage = computed(() => props.modelValue.length < 3);
const showResultsList = computed(
  () => props.modelValue.length > 2 && !!props.items.length
);
</script>

<template>
  <div>
    <input
      id="search"
      type="text"
      v-if="focusOnLoad"
      v-focus
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <input
      id="search"
      type="text"
      v-else
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
  <div id="list-container" class="list-container">
    <label id="validation-message" v-if="showValidationMessage">
      Enter at least 3 characters.
    </label>

    <ul id="results-list" v-else-if="showResultsList">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>

    <label id="no-results-message" v-else> No matching results found. </label>
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

ul {
  list-style-position: inside;
  padding-left: 25%;
}

li {
  text-align: left;
}
</style>