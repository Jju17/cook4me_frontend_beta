// import { seedDatabaseMeals } from "../seed";
// import fb from "firebase";
import fb from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAejfwFFsUN26S8maOuYixGQMXb4x9JdE",
  authDomain: "cook4me-b0856.firebaseapp.com",
  projectId: "cook4me-b0856",
  storageBucket: "cook4me-b0856.appspot.com",
  messagingSenderId: "409469374468",
  appId: "1:409469374468:web:2e0901412531f5533de551",
};

const firebase = fb.initializeApp(firebaseConfig);
var storage = fb.storage();
// const analytics = fb.getAnalytics(firebaseConfig);
const { FieldValue } = fb.firestore;

// seedDatabaseMeals(firebase);

export { firebase, FieldValue, storage };
