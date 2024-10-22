import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'aora-mobile-app.firebaseapp.com',
  projectId: 'aora-mobile-app',
  storageBucket: 'aora-mobile-app.appspot.com',
  messagingSenderId: '499237345495',
  appId: '1:499237345495:web:34108fd6a0fbebd5b3f892',
  measurementId: 'G-ZEYQB2FX1E',
}

export const app = initializeApp(firebaseConfig)
