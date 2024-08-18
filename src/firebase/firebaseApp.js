import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbFZ7bntEur2TU6IFHItV80cTiHBX5xyc",
    authDomain: "hot-onion-restaurant-7df6d.firebaseapp.com",
    projectId: "hot-onion-restaurant-7df6d",
    storageBucket: "hot-onion-restaurant-7df6d.appspot.com",
    messagingSenderId: "761378071704",
    appId: "1:761378071704:web:6078f683c60183d9761ced"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication service
export const auth = getAuth(app);

// Function to sign up a user with email and password
export const signupWithEmailAndPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // User signed up successfully
        console.log("User signed up:", userCredential.user);
        return userCredential.user;
    } catch (error) {
        // Handle errors
        console.error("Error signing up:", error.message);
        throw error;
    }
};

// Export the initialized Firebase app instance
export default app;