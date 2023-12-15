
import React from 'react';
import ReactDOM from 'react-dom/client'
import { initializeApp } from 'firebase/app';
import App from './App';


const firebaseConfig = {
  apiKey: "AIzaSyAInr160skgNpqmTey2f_ZtPaer4tJ0iv8",
  authDomain: "tienditajp-badd5.firebaseapp.com",
  projectId: "tienditajp-badd5",
  storageBucket: "tienditajp-badd5.appspot.com",
  messagingSenderId: "638137341065",
  appId: "1:638137341065:web:cd360d947d5cea7767e258"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
