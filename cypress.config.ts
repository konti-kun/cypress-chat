import { defineConfig } from 'cypress'
import { initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getAuth } from 'firebase-admin/auth'
import { initializeApp as initializeClientApp } from 'firebase/app'
import {
  connectAuthEmulator,
  getAuth as getClientAuth,
} from 'firebase/auth'
import {
  connectFirestoreEmulator,
  getFirestore as getClientFirestore,
} from 'firebase/firestore'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3003',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080'
      process.env.FIREBASE_AUTH_EMULATOR_HOST = 'localhost:9099'
      process.env.FIREBASE_STORAGE_EMULATOR_HOST = 'localhost:9199'
      initializeApp({
        projectId: 'cypress-chat-test',
      })
      initializeClientApp({
        apiKey: 'dummy-api-key',
        authDomain: '',
        databaseURL: '',
        projectId: 'cypress-chat-test',
        storageBucket: '',
        appId: '',
      })
      const db = getClientFirestore()
      connectFirestoreEmulator(db, 'localhost', 8080)
      const auth = getClientAuth()
      connectAuthEmulator(auth, 'http://localhost:9099')
      on('task', {
        createDoc: async ({ path, data }) => {
          const db = getFirestore()
          return db.doc(path).set(data)
        },
        createUser: async ({ email, password, uid }) => {
          const auth = getAuth()
          return auth.createUser({ email, password, uid, emailVerified: true })
        },
      })
    },
  },
})
