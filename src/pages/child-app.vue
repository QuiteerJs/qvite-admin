<script setup lang="ts">
const isDev = computed(() => import.meta.env.DEV)

const route = useRoute()
const name = computed(() => route.query.name as string)
</script>

<template>
  <micro-app v-if="name === 'child-1'" name="child-1" url="http://localhost:8001/" :iframe="isDev" :disable-sandbox="!isDev" />
  <micro-app v-if="name === 'child-2'" name="child-2" url="http://localhost:8002/" :iframe="isDev" :disable-sandbox="!isDev" />
</template>

<style lang="scss" scoped></style>
