import React, { useEffect, useState } from "react";

import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm";
import ToCheckOutLight from "../components/headers/ToCheckOutLight";
import MealsCardsCart from "../components/cards/MealsCardsCart.js";

import {
  getStarters,
  getMainDishes,
  getDesserts,
  getExtras,
} from "../services/firebase";

export default function Cart() {
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

  return (
    <>
      <Header />
      {/* TODO: Lier ToCheckOutLight à stripe */}
      <ToCheckOutLight
        heading={`Il ne reste plus qu'à...`}
        primaryLinkText={`Commander`}
      />

      {/* TODO: Lier les plats du client avec le panier */}
      <MealsCardsCart
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
