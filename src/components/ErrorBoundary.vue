<template>
  <div>
    <slot
      v-if="error"
      name="error"
      v-bind:err="error"
      v-bind:vm="instance"
      v-bind:info="errorInfo"
      >Something went wrong</slot
    >
    <slot v-else></slot>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured, defineProps } from "vue";

const props = defineProps({
  stopPropagation: Boolean,
});

const error = ref();
const instance = ref();
const errorInfo = ref();

onErrorCaptured((err, vm, info) => {
  error.value = err;
  instance.value = vm;
  errorInfo.value = info;

  return !props.stopPropagation;
});
</script>

<style lang="scss" scoped>
</style>