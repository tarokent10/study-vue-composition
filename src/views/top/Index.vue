<template>
  <div>
    <h1 class="text-xl">目次</h1>
    <hr />
    <ul class="list-disc">
      <li
        v-for="(page, idx) in pages"
        :key="idx"
        class="hover:bg-gray-200 cursor-pointer"
      >
        <a @click.prevent="toTargetPage(page.routeName)">{{ page.title }}</a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { routes } from '@/views/pages';

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      pages: routes
    });
    const toTargetPage = (routeName: string) => {
      router.push({ name: routeName });
    };
    return { ...toRefs(state), toTargetPage };
  }
});
</script>
