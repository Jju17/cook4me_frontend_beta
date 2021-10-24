import React, { useEffect, useState, useContext } from "react";

import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm";
import ToCheckOutLight from "../components/headers/ToCheckOutLight";
import MealsCardsCart from "../components/cards/MealsCardsCart.js";
import UserContext from "../context/user.js";

import { getCartMeals } from "../services/firebase";

export default function Cart() {
  const [meals, setMeals] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    getCartMeals(user.uid).then((value) => {
      setMeals(value);
    });
  }, [user.uid]);

  return (
    <>
      <Header />
      {/* TODO: Lier ToCheckOutLight à stripe */}
      <ToCheckOutLight
        heading={`Il ne reste plus qu'à...`}
        primaryLinkText={`Commander`}
      />

      {/* TODO: Lier les plats du client avec le panier */}
      {meals && <MealsCardsCart meals={meals} />}
      <Footer />
    </>
  );
}
