import React, { useEffect } from "react";
// import tw from "twin.macro";
import Header from "../components/headers/light";
// import TabGrid from "../components/cards/AdminTabCardGrid.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

export default function AdminCooker() {
  /*TODO: Cooker Admin page */
  //   const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  useEffect(() => {
    document.title = "Administration des plats";
  }, []);
  return (
    <>
      <Header />
      <div className="bg-gray h-screen flex flex-col">
        <div className="m-auto flex justify-center items-center flex-col">
          <p className="text-center text-2xl">
            Coming soon, pour modifier tes plats, adresse toi à un
            administrateur!
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/julien.rahier"
            className="text-center text-2xl text-blue-700"
          >
            Contacter un administrateur
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
}
