import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDkf0QBsPPuiNiPYkMKr7sUwNPonsYr5T0",
  authDomain: "test-chat-app-f30ef.firebaseapp.com",
  databaseURL: "https://test-chat-app-f30ef-default-rtdb.firebaseio.com",
  projectId: "test-chat-app-f30ef",
  storageBucket: "test-chat-app-f30ef.appspot.com",
  messagingSenderId: "62269595313",
  appId: "1:62269595313:web:95d9946b796389c14f8c90",
  measurementId: "G-S67KYZXKDG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
