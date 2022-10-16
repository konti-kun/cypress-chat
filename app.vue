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
    <span id="a8sales" />
    <NuxtPage />
  </div>
</template>
