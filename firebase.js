// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBpN-ByLiUt-V-2bEbSeLmzd68L7p7Ty2U',
	authDomain: 'testcomments-e96a6.firebaseapp.com',
	projectId: 'testcomments-e96a6',
	storageBucket: 'testcomments-e96a6.appspot.com',
	messagingSenderId: '1047126594821',
	appId: '1:1047126594821:web:0f7e907cf9e1af2655136c',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
