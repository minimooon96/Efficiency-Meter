const firebaseConfig = {
    apiKey: "AIzaSyCQm6V28oglDEwwXKxD4nj81fKEQ20jclk",
    authDomain: "efficiency-meter.firebaseapp.com",
    projectId: "efficiency-meter",
    storageBucket: "efficiency-meter.appspot.com",
    messagingSenderId: "127480064298",
    appId: "1:127480064298:web:175795ab84af55cc3dd653"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.languageCode = 'en';

auth.onAuthStateChanged((user) => {
    if (user) {
        displayUserInfo(user);
    } else {
        console.log("No user signed in");
    }
});

function displayUserInfo(user) {
    const userInfoContainer = document.getElementById("user-info");

    const displayNameElement = document.createElement("p");
    displayNameElement.textContent = "Welcome, " + user.displayName;

    const emailElement = document.createElement("p");
    emailElement.textContent = "Email: " + user.email;

    const photoURL = user.photoURL;
    const photoElement = document.createElement("img");
    photoElement.src = photoURL;
    photoElement.alt = "Profile Picture";
    photoElement.style.width = "100px";

    userInfoContainer.appendChild(displayNameElement);
    userInfoContainer.appendChild(emailElement);
    userInfoContainer.appendChild(photoElement);
}