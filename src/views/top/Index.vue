<template>
  <ul class="list-disc">
    <li class="hover:bg-gray-400" v-for="(page, idx) in state.pages" :key="idx">
      <a @click.prevent="toTargetPage(page.routeName)">{{ page.title }}</a>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { routes } from "@/views/pages";

export default defineComponent({
  setup() {
    const router = useRouter();
    const state = reactive({
      pages: routes,
    });
    const toTargetPage = (routeName: string) => {
      console.log("name" + routeName);
      router.push({ name: routeName });
    };
    return { state, toTargetPage };
  },
});
</script>
