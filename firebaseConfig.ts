// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDxnicBIImABKv64rJM-Xy-nESiEqLGp2Q',
  authDomain: 'phr23-efb9c.firebaseapp.com',
  projectId: 'phr23-efb9c',
  storageBucket: 'phr23-efb9c.appspot.com',
  messagingSenderId: '506029943249',
  appId: '1:506029943249:web:6607cd585d6f2fc45f18f0',
  measurementId: 'G-WRWE4Z9XS7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
