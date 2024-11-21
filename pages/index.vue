<script lang="ts" setup>
const sectionid = ref(0);
</script>

<template>
  <div class="scroll-container">
    <div v-for="(item, index) in 5" :key="index" class="scroll-area">
      <div>
        {{ item }}
      </div>
      <button @click=""></button>
    </div>
  </div>
  <div>
    <button onclick=""></button>
    <button onclick=""></button>
  </div>
</template>

<style lang="scss" scoped>
.scroll-container {
  overflow: auto;
  scroll-snap-type: y mandatory; /* y 축 방향으로만 scroll snap 적용 */
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.scroll-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera: 스크롤바 숨기기 */
}

/* 자식 스크롤 스냅 영역 */
.scroll-area {
  scroll-snap-align: center; /* 스크롤 위치 맞춤 */
  height: 100vh;
  width: 100vw;
  transition: 1s all;
}
</style>
