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
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  user-select: none;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}
</style>
