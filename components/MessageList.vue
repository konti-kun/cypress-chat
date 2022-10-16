<script setup lang="ts">
import { Message } from "~~/types/message";

defineProps<{ messages: Message[] }>();
</script>
<template>
  <div>
    <div v-for="message of messages">
      <MessageItem :message="message" />
    </div>
  </div>
</template>
