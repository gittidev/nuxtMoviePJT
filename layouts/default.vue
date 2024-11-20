<script setup>
import Navbar from "~/components/common/Navbar";
</script>

<template>
  <div>
    <Navbar />
    <p>
      Some default ldsfsfdsdkfjlskjflkjdslkfjlayout content shared across all
      pages
    </p>
    <slot />
  </div>
</template>
