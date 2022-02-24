/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAtePCe_DfbP9J1vvR0hf6xiEMFyk7WuxA",
	authDomain: "video-player-rp.firebaseapp.com",
	projectId: "video-player-rp",
	storageBucket: "video-player-rp.appspot.com",
	messagingSenderId: "913175730230",
	appId: "1:913175730230:web:4c777ecc6d947d5c7e6097",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;

