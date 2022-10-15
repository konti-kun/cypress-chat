<script setup lang="ts">
import { signOut } from "~~/lib/auth";

onMounted(() => {
  signOut();
});
</script>
<template>
  <div class="h-screen w-screen flex justify-center items-center">
    <Spinner />
  </div>
</template>
