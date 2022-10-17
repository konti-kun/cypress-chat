<script setup lang="ts">
export type AccountForm = {
  email: string;
  password: string;
};

const props = defineProps<{
  onSubmit: (param: AccountForm) => Promise<boolean>;
}>();

const form = reactive<AccountForm>({ email: "", password: "" });
const hasError = ref(false);
const handleSubmit = async (form: AccountForm) => {
  hasError.value = !(await props.onSubmit(form));
};
</script>

<template>
  <form @submit.prevent="() => handleSubmit(form)">
    <div class="form-control">
      <label class="label">
        <span class="label-text">メールアドレス</span>
      </label>
      <input
        type="email"
        name="email"
        autocomplete="username"
        class="input input-sm input-bordered"
        v-model="form.email"
      />
    </div>
    <div class="form-control">
      <label class="label">
        <span class="label-text">パスワード</span>
      </label>
      <input
        type="password"
        name="password"
        autocomplete="current-password"
        class="input input-sm input-bordered"
        v-model="form.password"
      />
      <label v-if="hasError" class="label pt-1 pb-3">
        <span class="label-text-alt text-error">
          メールアドレスかパスワードが間違っています
        </span>
      </label>
    </div>
    <button
      type="submit"
      class="btn btn-sm text-center mt-6 w-full"
      @click="handleSubmit(form)"
    >
      ログイン
    </button>
  </form>
</template>
