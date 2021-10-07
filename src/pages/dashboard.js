import React, { useEffect, useContext, useState } from "react";
import fb from "firebase";

import tw from "twin.macro";
import Header from "../components/headers/light";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import FirebaseContext from "../context/firebase";
import {
  getStarters,
  getMainDishes,
  getDesserts,
  getExtras,
} from "../services/firebase";

export default function Dashboard() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const { firebase } = useContext(FirebaseContext);
  const [starters, setStarters] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [desserts, setDessert] = useState([]);
  const [extras, setExtra] = useState([]);

  useEffect(() => {
    getStarters().then((value) => {
      setStarters(value);
    });

    getMainDishes().then((value) => {
      setMainDishes(value);
    });

    getDesserts().then((value) => {
      setDessert(value);
    });

    getExtras().then((value) => {
      setExtra(value);
    });
  }, []);

  useEffect(() => {
    document.title = "C4M - Dashboard";
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
