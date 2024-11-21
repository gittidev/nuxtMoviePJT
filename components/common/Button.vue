<script lang="ts" setup>
// Props 정의
defineProps<{
  label: string; // 버튼의 텍스트
  onClick: () => void; // 클릭 시 실행되는 함수
}>();
</script>

<template>
  <div class="button" @click="onClick">
    {{ label }}
  </div>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
}
</style>
