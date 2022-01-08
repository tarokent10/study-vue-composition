<template>
  <div>
    <h3 class="text-lg font-bold">基本のキ：Inline要素とBlock要素について</h3>
    <div class="block">横いっぱいに要素を取って縦に並ぶよ</div>
    <div class="block_red">
      <div class="inline_in_block">div:Block要素内の縦揃えは大変</div>
    </div>
    <p class="block_yellow">p</p>
    <h2 class="block_blue">h2</h2>
    <div class="flex-container">FlexContainer</div>
    <span style="color: red">spanです</span>
    <span style="color: blue">spanです</span>
    <div id="nav">
      <ul>
        <li>Inline</li>
        <li>Block</li>
        <li>はこんな感じ</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  }
});
</script>
<style scoped>
.flex-container {
  display: flexbox;
}
.block {
  background: burlywood;
}
.block_red {
  background: red;
  width: 380px;
  min-height: 50px;
  margin: 0 auto;

  position: relative;
}
.block_blue {
  background: rgba(0, 0, 255, 0.308);
  width: 85px;
  min-height: 50px;
  margin: 0 auto;
}
.block_yellow {
  background: yellow;
  width: 75px;
  min-height: 50px;
  margin: 0 auto;
}
.inline_in_block {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5rem;
}
div#nav {
  border: solid tomato;
}
#nav ul {
  list-style-type: none;
  text-align: center;
  height: 50px;
}
#nav ul li {
  display: inline-block;
  width: 180px;
  min-height: 30px;
  padding: 10px 0;
  margin: 10px 5px;
  background: skyblue;
  color: white;
  font-weight: bold;
}
</style>
