
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyDI4XaYNE4qARkFdZdWVATnph_Mwq1BhJk",
    authDomain: "noam-website.firebaseapp.com",
    projectId: "noam-website",
    storageBucket: "noam-website.appspot.com",
    messagingSenderId: "976480899561",
    appId: "1:976480899561:web:cc23401b41ad8796143b78",
    measurementId: "G-E82898W5M9"
};

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
