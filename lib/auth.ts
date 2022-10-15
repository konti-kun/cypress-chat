import { getAuth, signInWithEmailAndPassword, signOut as _signOut } from "firebase/auth"

export const signIn = async (email: string, password: string) => {
  const auth = getAuth()
  await signInWithEmailAndPassword(auth, email, password)
}
export const signOut = async () => {
  const auth = getAuth()
  await _signOut(auth)
}