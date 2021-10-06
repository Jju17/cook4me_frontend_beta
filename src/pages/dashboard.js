import React, { useEffect, useContext, useState } from "react";
import tw from "twin.macro";
import Header from "../components/headers/light";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import FirebaseContext from "../context/firebase";

export default function Dashboard() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const { firebase } = useContext(FirebaseContext);
  const [starters, setStarters] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [desserts, setDessert] = useState([]);
  const [extras, setExtra] = useState([]);

  async function getStarters() {
    let meals = [];

    await firebase
      .firestore()
      .collection("meals")
      .where("type", "==", "entree")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
          meals.push(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setStarters(meals);
  }

  async function getMainDishes() {
    let meals = [];

    await firebase
      .firestore()
      .collection("meals")
      .where("type", "==", "plat")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
          meals.push(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setMainDishes(meals);
  }

  async function getDesserts() {
    let meals = [];

    await firebase
      .firestore()
      .collection("meals")
      .where("type", "==", "dessert")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
          meals.push(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setDessert(meals);
  }

  async function getExtras() {
    let meals = [];

    await firebase
      .firestore()
      .collection("meals")
      .where("type", "==", "extra")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          //   console.log(doc.id, " => ", doc.data());
          meals.push(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setExtra(meals);
  }

  useEffect(() => {
    getStarters();
    getMainDishes();
    getDesserts();
    getExtras();
  }, []);

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <>
      <Header />
      <TabGrid
        heading={
          <>
            Qu'est ce qu'on mange <HighlightedText>Jeudi ?</HighlightedText>
          </>
        }
        tabs={{
          Entree: starters,
          Plat: mainDishes,
          Dessert: desserts,
          Divers: extras,
        }}
      />
      <Footer />
    </>
  );
}

// tabs={
//     Entree: starters,
//     Plat: mainDishes,
//     Dessert: desserts,
//     Divers: extras,
// }
