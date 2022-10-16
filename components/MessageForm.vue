<script setup lang="ts">
const props = defineProps<{ onSubmit: (content: string) => Promise<void> }>();

const content = ref("");

const handleSubmit = async () => {
  await props.onSubmit(content.value);
  content.value = "";
};
</script>
<template>
  <form @submit.prevent="handleSubmit()">
    <div class="input-group">
      <input
        type="text"
        placeholder="Type here"
        class="input w-full max-w-xs input-bordered"
        v-model="content"
      />
      <button class="btn btn-square" type="submit">送信</button>
    </div>
  </form>
</template>
