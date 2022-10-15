import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const [useProvideUserStore, useUser] = createInjectionState(() => {
  const loading = ref(true);
  const currentUser = ref<User>();
  const route = useRoute();
  onAuthStateChanged(getAuth(), async (user) => {
    if (!user) {
      await navigateTo({ name: "sign-in" });
    } else {
      currentUser.value = user
      if (route.name === "sign-in") {
        await navigateTo({ name: "index" });
      }
    }
    loading.value = false;
  });
  return { currentUser, loading };
});

export { useProvideUserStore, useUser };
