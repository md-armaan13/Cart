import React from 'react';
import ReactDOM from 'react-dom/client';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDhJODkSw5MVU33c9p515qWq7Dv0t7QK9E",
  authDomain: "cart-6964a.firebaseapp.com",
  projectId: "cart-6964a",
  storageBucket: "cart-6964a.appspot.com",
  messagingSenderId: "897885462428",
  appId: "1:897885462428:web:67a8077243247fb875b259",
  measurementId: "G-KF4685SV6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

