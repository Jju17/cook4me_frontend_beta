import React, { useEffect, useState, useContext } from "react";

import tw from "twin.macro";
import Header from "../components/headers/light";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import { ContentWithPaddingXl } from "../components/misc/Layouts.js";
import UserContext from "../context/user";

import {
  getStarters,
  getMainDishes,
  getDesserts,
  getExtras,
} from "../services/firebase";

export default function Dashboard() {
  const { user } = useContext(UserContext);

  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const [starters, setStarters] = useState([]);
  const [mainDishes, setMainDishes] = useState([]);
  const [desserts, setDessert] = useState([]);
  const [extras, setExtra] = useState([]);

  useEffect(() => {
    console.log("dashboard user : ", user);
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
      <ContentWithPaddingXl>
        <TabGrid
          heading={
            /* TODO: Faire en sorte que le jour s'update automatiquement */
            <>
              Qu'est ce qu'on mange{" "}
              <HighlightedText>cette semaine ?</HighlightedText>
            </>
          }
          tabs={{
            Entree: starters,
            Plat: mainDishes,
            Dessert: desserts,
            Divers: extras,
          }}
          user={user}
        />
      </ContentWithPaddingXl>
      <Footer />
    </>
  );
}
