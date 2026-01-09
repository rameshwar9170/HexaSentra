import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdMdhfGyVnIT3KUg7u69nMEj0Aq6egFAA",
    authDomain: "hexasentra.firebaseapp.com",
    databaseURL: "https://hexasentra-default-rtdb.firebaseio.com",
    projectId: "hexasentra",
    storageBucket: "hexasentra.firebasestorage.app",
    messagingSenderId: "367296520610",
    appId: "1:367296520610:web:f28148aee3be7926eb92fb",
    measurementId: "G-DLEQ1Y3X84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;
