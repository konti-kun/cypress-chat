import { getApp, getApps, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
  if (getApps().length === 0) {
    const config = nuxtApp.$config;
    initializeApp({
      apiKey: config.firebaseApiKey,
      authDomain: config.firebaseAuthDomain,
      databaseURL: config.firebaseDatabaseURL,
      projectId: config.firebaseProjectId,
      storageBucket: config.firebaseStorageBucket,
      appId: config.firebaseAppId,
    });
    const db = initializeFirestore(getApp(), {
      experimentalForceLongPolling: true,
    });
    connectFirestoreEmulator(db, "localhost", 8080);
    const auth = getAuth();
    connectAuthEmulator(auth, "http://localhost:9099");
  }
});
