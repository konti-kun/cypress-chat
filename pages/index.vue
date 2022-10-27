<script setup lang="ts">
import { addMessage, messagesQuery } from "~~/lib/message";
import { useAuth } from "~~/composables/useAuthState";

const { currentUser } = useAuth()!;

const messages = useFirestore(messagesQuery());

const handleSubmit = (content: string) => {
  return addMessage(content, currentUser.value!.uid);
};
</script>
<template>
  <div v-if="currentUser">
    <MessageList v-if="!!messages" :messages="messages" />
    <MessageForm :onSubmit="handleSubmit" />
  </div>
</template>
