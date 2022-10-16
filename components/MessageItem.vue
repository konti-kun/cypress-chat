<script setup lang="ts">
import { Message } from "~~/types/message";

defineProps<{ message: Message }>();
</script>
<template>
  <div>{{ message.content }}</div>
</template>
