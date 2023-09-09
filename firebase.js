
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCf8vFpd6Apq9iCIKByIx-q8R9FmWQAb5M",
    authDomain: "pomodro-app-2c3bc.firebaseapp.com",
    projectId: "pomodro-app-2c3bc",
    storageBucket: "pomodro-app-2c3bc.appspot.com",
    messagingSenderId: "756209209857",
    appId: "1:756209209857:web:ff671433107808b3302600",
    measurementId: "G-JBMZSDHJJN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
