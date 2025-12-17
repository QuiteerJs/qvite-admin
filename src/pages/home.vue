<script setup lang="ts">
function handleClick() {
  window.$message?.success('点击了按钮')
}

const isDev = computed(() => import.meta.env.DEV)
</script>

<template>
  <div>
    <micro-app name="child-1" url="http://localhost:8001/" :iframe="isDev" :disable-sandbox="!isDev" />
    <micro-app name="child-2" url="http://localhost:8002/" :iframe="isDev" :disable-sandbox="!isDev" />
    <n-button type="primary" @click="handleClick">
      按钮
    </n-button>
  </div>
</template>

<style lang="scss" scoped></style>
