<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "ja",
    "data-theme": "bumblebee",
  },
});
useProvideAuthStore();
</script>
<template>
  <div class="font-sans">
    <NuxtPage />
  </div>
</template>
