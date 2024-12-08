// Import necessary functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsRveNzC1Hvr4Xe5FpHJ_dGqbMboKJRP4",
  authDomain: "navix-16076.firebaseapp.com",
  projectId: "navix-16076",
  storageBucket: "navix-16076.firebasestorage.app",
  messagingSenderId: "231256195231",
  appId: "1:231256195231:web:f0adef6105e89bd2a7a2aa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle form submission
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Create user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successful registration
      alert("Account created successfully! Redirecting to login...");
      // Redirect to login.html
      window.location.href = "./login.html";
    })
    .catch((error) => {
      // Handle errors
      alert(`Error: ${error.message}`);
    });
});

// Handle Google Sign-In
const googleSignInButton = document.getElementById("googleSignIn");
googleSignInButton.addEventListener("click", () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // Successful Google Sign-In
      const user = result.user;
      alert(`Welcome, ${user.displayName}! Redirecting to login...`);
      // Redirect to login.html
      window.location.href = "./login.html";
    })
    .catch((error) => {
      // Handle errors
      alert(`Google Sign-In Error: ${error.message}`);
    });
});
