<script setup lang="ts">
import { reactive } from '@vue/reactivity';

const data = reactive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
const empty = data.concat(data);
</script>

<template>
  <div>
    <!-- flexbox 水平または垂直に要素を配置し柔軟なレイアウトを実現する -->
    <!-- flex container / flex item -->
    <div class="flex-container-row w-4/6 bg-yellow-50" style="height: 200px">
      <div
        v-for="(d, idx) in data"
        :key="idx"
        class="w-8 h-8 bg-amber-200 border-neutral-900 cell"
      >
        {{ d }}
      </div>
      <!-- <div v-for="(d, idx) in empty" :key="idx" class="cell is-empty"></div> -->
      <!-- 最後の行だけバランスが崩れてしまうのをなんとかする場合は空要素利用するなど工夫が必要らしい -->
    </div>
    <hr />
    <div class="flex-container-clm w-5/6 bg-red-50" style="height: 600px">
      <!-- 子要素は自動的にFlexアイテムとなる -->
      <div
        v-for="(d, idx) in data"
        :key="idx"
        class="w-12 bg-amber-200 border-neutral-900 cell"
      >
        {{ d }}
      </div>
    </div>
  </div>
</template>

<style>
.flex-container-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  /* align-content: flex-end; */
}
.flex-container-clm {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.cell {
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  vertical-align: middle;
}
/*
 * 空の子パネル
 * padding, margin の左右も 0 に指定してしまうと、
 * 最後の行のレイアウトが崩れるので注意。
 */
.cell.is-empty {
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
