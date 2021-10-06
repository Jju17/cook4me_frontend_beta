import React, { useEffect } from "react";
import tw from "twin.macro";
import Header from "../components/headers/light";
import TabGrid from "../components/cards/AdminTabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

export default function AdminCooker() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  useEffect(() => {
    document.title = "Administration des plats";
  }, []);
  return (
    <>
      <Header />
      <TabGrid
        heading={
          <>
            Gère tes <HighlightedText>Chefs d'oeuvres</HighlightedText>
          </>
        }
      />
      <Footer />
    </>
  );
}
