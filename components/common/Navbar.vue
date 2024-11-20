<script lang="ts" setup>


function handleLogin () {
  console.log('로그인 실행')
}

</script>


<template>
  <div class="nav">
    <v-list>Home</v-list>
    <v-list>community</v-list>
    <v-list>recommend</v-list>
    <v-list>mypage</v-list>
    <CommonButton label="Click Me" :onClick="handleLogin" />
  </div>
</template>

<style lang="scss" scoped>
.nav {
  background-color: white;
  width: 100%;
  min-height: 8rem;
  flex:auto;
}

</style>
