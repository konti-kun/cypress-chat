import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export const signIn = async (email: string, password: string) => {
  const auth = getAuth()
  await signInWithEmailAndPassword(auth, email, password)
}