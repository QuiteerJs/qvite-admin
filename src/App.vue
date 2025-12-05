<script setup lang="ts">
const envObj = import.meta.env
</script>

<template>
  <h1>You did it!</h1>
  <a href="/child-1">Child 1</a>
  <a href="/child-2">Child 2</a>
  <p>
    {{ JSON.stringify(envObj, null, 2) }}
  </p>
</template>

<style scoped></style>
