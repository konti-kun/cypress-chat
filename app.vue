<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "ja",
    "data-theme": "bumblebee",
  },
});
useProvideUserStore();
</script>
<template>
  <div class="font-sans">
    <span id="a8sales" />
    <NuxtPage />
  </div>
</template>
