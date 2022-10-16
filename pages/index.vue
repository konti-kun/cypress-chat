<script setup lang="ts">
import { addMessage } from "~~/lib/message";
import { useAuth } from "~~/composables/useAuthState";

const { currentUser } = useAuth()!;

const handleSubmit = (content: string) => {
  return addMessage(content, currentUser.value!.uid);
};
</script>
<template>
  <div>
    <MessageList :messages="[]" />
    <MessageForm :onSubmit="handleSubmit" />
  </div>
</template>
