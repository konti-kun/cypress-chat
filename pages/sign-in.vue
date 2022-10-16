<script setup lang="ts">
import { AccountForm } from "~~/components/SignInForm.vue";
import { signIn } from "~~/lib/auth";
const handleSubmit = async (param: AccountForm) => {
  await signIn(param.email, param.password);
  return true;
};
</script>
<template>
  <div class="h-screen flex justify-center">
    <div class="py-6 px-8 my-auto w-80 mt-20 rounded shadow-xl">
      <SignInForm :onSubmit="handleSubmit" />
    </div>
  </div>
</template>
