import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react'
import {
  createUserWithEmailAndPassword,
  getAuth,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '@/libs/firebase'

const authFirebase = getAuth(app)

const signUp = async (body: { email: string; password: string }) => {
  const { email, password } = body
  const userCredential = await createUserWithEmailAndPassword(
    authFirebase,
    email,
    password
  )

  return userCredential.user
}

const signIn = async (body: { email: string; password: string }) => {
  const { email, password } = body
  const userCredential = await signInWithEmailAndPassword(
    authFirebase,
    email,
    password
  )

  return userCredential.user
}

interface UserAuthContextType {
  user: null | User
  signUp: typeof signUp
  signIn: typeof signIn
}

const UserAuthContext = createContext<UserAuthContextType>({
  user: null,
  signUp,
  signIn,
})

export const useUserAuth = () => {
  return useContext(UserAuthContext)
}

export const UserAuthContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [user, setUser] = useState<null | User>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, (currentuser) => {
      setUser(currentuser)
    })

    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <UserAuthContext.Provider value={{ user, signUp, signIn }}>
      {children}
    </UserAuthContext.Provider>
  )
}
