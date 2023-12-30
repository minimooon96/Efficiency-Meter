import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQm6V28oglDEwwXKxD4nj81fKEQ20jclk",
    authDomain: "efficiency-meter.firebaseapp.com",
    projectId: "efficiency-meter",
    storageBucket: "efficiency-meter.appspot.com",
    messagingSenderId: "127480064298",
    appId: "1:127480064298:web:175795ab84af55cc3dd653"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn");

googleLogin.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("Authentication error:", error);
        });
});