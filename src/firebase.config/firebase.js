// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxLJJYsnEpXYOS6S0IPHB0voQuGp6d5T8",
    authDomain: "international-news-c6169.firebaseapp.com",
    projectId: "international-news-c6169",
    storageBucket: "international-news-c6169.appspot.com",
    messagingSenderId: "763218978917",
    appId: "1:763218978917:web:13f79a64994ef877bb3e8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app