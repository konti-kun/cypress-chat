import { defineConfig } from "cypress";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
      process.env.FIREBASE_AUTH_EMULATOR_HOST = "localhost:9099";
      initializeApp({
        projectId: "kontikun-simple-chat",
      });
      on('task', {
        createUser: async ({ email, password, uid }) => {
          const auth = getAuth()
          return auth.createUser({ email, password, uid, emailVerified: true })
        },
        createDoc: async ({
          path,
          data,
        }: {
          path: string
          data: { [key: string]: any }
        }) => {
          const db = getFirestore()
          Object.entries(data).map(([key, value]) => {
            if (typeof data !== 'object') {
              return
            }
            if (value['seconds']) {
              data[key] = Timestamp.fromMillis(
                value.seconds * 100 + value.nanoseconds / 1000000
              )
            }
          })
          return db.doc(path).set(data)
        },
      })
    },
  },
});
