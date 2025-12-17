<script setup lang="ts">
import { dateZhCN, zhCN } from 'naive-ui'
import { createTextVNode } from 'vue'

const ContextHolder = defineComponent({
  name: 'ContextHolder',
  setup() {
    function register() {
      window.$loadingBar = useLoadingBar()
      window.$dialog = useDialog()
      window.$message = useMessage()
      window.$notification = useNotification()
    }

    register()

    return () => createTextVNode()
  },
})
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" class="h-full">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <ContextHolder />
            <router-view />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped></style>
