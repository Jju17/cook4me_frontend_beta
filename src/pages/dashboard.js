import React, { useEffect } from "react";
import tw from "twin.macro";
import Header from "../components/headers/light";
import TabGrid from "../components/cards/TabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

export default function Dashboard() {
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  useEffect(() => {
    document.title = "Instagram";
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
      />
      <Footer />
    </>
  );
}
