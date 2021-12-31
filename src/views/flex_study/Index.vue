<template>
  <div>
    <!-- flexbox 水平または垂直に要素を配置し柔軟なレイアウトを実現する -->
    <!-- flex container / flex item -->
    <div class="flex-container">FlexContainer</div>
    <div class="" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>
<style>
.flex-container {
  display: flexbox;
}
</style>
