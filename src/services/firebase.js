import fb from "firebase";
import { firebase, storage } from "../lib/firebase";

export async function doesUsernameExist(username) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("username", "==", username)
    .get();

  return result.docs.map((user) => user.data().length > 0);
}

export async function getUserByUserId(userId) {
  const result = await firebase
    .firestore()
    .collection("users")
    .where("userId", "==", userId)
    .get();

  return result.docs.map((item) => ({
    ...item.data(),
    docId: item.id,
  }));
}

export async function getAllMeals() {
  const result = await firebase.firestore().collection("meals").get();
  return result;
}

export async function getStarters() {
  let meals = [];
  var actualDate = fb.firestore.Timestamp.fromDate(new Date(Date.now()));

  await firebase
    .firestore()
    .collection("meals")
    .where("type", "==", "entree")
    .where("dateAvailable", ">", actualDate)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());

        meals.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return meals;
}

export async function getMainDishes() {
  let meals = [];

  var actualDate = fb.firestore.Timestamp.fromDate(new Date(Date.now()));

  await firebase
    .firestore()
    .collection("meals")
    .where("type", "==", "plat")
    .where("dateAvailable", ">", actualDate)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        meals.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  return meals;
}

export async function getDesserts() {
  let meals = [];
  var actualDate = fb.firestore.Timestamp.fromDate(new Date(Date.now()));

  await firebase
    .firestore()
    .collection("meals")
    .where("type", "==", "dessert")
    .where("dateAvailable", ">", actualDate)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        meals.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return meals;
}

export async function getExtras() {
  let meals = [];
  var actualDate = fb.firestore.Timestamp.fromDate(new Date(Date.now()));

  await firebase
    .firestore()
    .collection("meals")
    .where("type", "==", "extra")
    .where("dateAvailable", ">", actualDate)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
        meals.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
  return meals;
}
