import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9xihVZoK_75hO0oIuq1F1XIZJanXvfCU",
  authDomain: "starbucks-clone-ba3e2.firebaseapp.com",
  projectId: "starbucks-clone-ba3e2",
  storageBucket: "starbucks-clone-ba3e2.appspot.com",
  messagingSenderId: "351614318189",
  appId: "1:351614318189:web:e6e5ee8572e7e9262bb164",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
