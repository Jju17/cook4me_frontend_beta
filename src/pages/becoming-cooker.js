import React from "react";
import tw from "twin.macro";
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "../components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default function BecomingCooker() {
  return (
    <>
      <Header />

      <Footer />
    </>
  );
}
