import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
	apiKey: "AIzaSyAeW7T2Qh9CsV6Z_gG0oLoIRj0P2k9j0Rs",
	authDomain: "newsappfiras.firebaseapp.com",
	projectId: "newsappfiras",
	storageBucket: "newsappfiras.appspot.com",
	messagingSenderId: "491908999025",
	appId: "1:491908999025:web:1395e800a5aead4f20b8d0",
	measurementId: "G-LRL2K2E1Z7",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
