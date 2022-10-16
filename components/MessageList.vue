<script setup lang="ts">
import { Message } from "~~/types/message";

const messages = [{ senderId: "testid", content: "test" }] as Message[];
</script>
<template>
  <div>
    <div v-for="message of messages">
      <MessageItem :message="message" />
    </div>
  </div>
</template>
