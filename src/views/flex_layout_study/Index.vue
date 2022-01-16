<script setup lang="ts"></script>

<template>
  <div>
    <!-- ヘッダー 特定コンテンツを右寄せするTips( margin auto) -->
    <header class="header1 py-10 bg-red-200">
      <h1>Sample Header</h1>
      <nav class="nav1">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>History</li>
        </ul>
      </nav>
      <div class="user1">
        <div>Setting</div>
      </div>
    </header>

    <hr />
    <!-- 左バー固定 -->
    <div class="wrapper2">
      <div class="left2 bg-red-100">Sub</div>
      <div class="right2 bg-orange-50">Main</div>
    </div>
  </div>
</template>

<style>
.header1 {
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  padding: 0 8px;
  background: lightblue;
  box-shadow: 0 5px 13px 0 rgba(#000, 0.15);
}
.nav1 {
  display: flex;
  margin-left: auto;
}
.nav1 li {
  padding: 20px 10px;
  border-style: solid;
  display: inline-block;
}
.user1 {
  display: flex;
}

.wrapper2 {
  display: flex;
  min-height: 200px;
  min-width: 80%;
}
.left2 {
  flex-basis: 200px;
  background: burlywood;
}
.right2 {
  flex-grow: 1;
  background: floralwhite;
}
</style>
