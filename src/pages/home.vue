<script setup lang="ts">
const router = useRouter()

function handleClick(name: string) {
  router.push({ name: 'child-app', query: { name } })
}
</script>

<template>
  <div>
    <n-flex>
      <TestCom />
      <n-button type="primary" @click="handleClick('child-1')">
        去子页面 1
      </n-button>
      <n-button type="primary" @click="handleClick('child-2')">
        去子页面 2
      </n-button>
    </n-flex>
  </div>
</template>

<style lang="scss" scoped></style>
