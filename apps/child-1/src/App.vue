<script setup lang="ts">
const envObj = import.meta.env
</script>

<template>
  <h1 class="text-3xl text-red-500 text-center font-bold">
    我是child-1
  </h1>
  <p>
    {{ JSON.stringify(envObj, null, 2) }}
  </p>
</template>

<style scoped></style>
