// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCo70SK4hmTQnNBBOQX9FJ71HyoEpCi8-8',
  authDomain: 'firestore-8c414.firebaseapp.com',
  projectId: 'firestore-8c414',
  storageBucket: 'firestore-8c414.firebasestorage.app',
  messagingSenderId: '515969825355',
  appId: '1:515969825355:web:11840a404eab151177ebce',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export { db }
