<script setup>
import { Footer, Navbar } from "@/components";

</script>

<template>
  <div>
    <Navbar />
    <p>
      Some default layout content shared across all pages
    </p>
    <!-- 페이지 컴포넌트를 렌더링 -->
    <NuxtPage />
    <Footer/>
  </div>
</template>
