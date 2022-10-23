<script setup lang="ts">
import { Message } from "~~/types/message";

defineProps<{ message: Message }>();
</script>
<template>
  <div class="message-item">{{ message.content }}</div>
</template>
