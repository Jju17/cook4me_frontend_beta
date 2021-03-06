import React, { useEffect } from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import ContactUsForm from "../components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "../components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default function ContactUs() {
  useEffect(() => {
    document.title = "C4M - Contactez-nous";
  }, []);
  return (
    <>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Louvain-La-Neuve",
            description: (
              <>
                <Address>
                  <AddressLine>Chemin du Cyclotron 6</AddressLine>
                  <AddressLine>1348 Ottignies-Louvain-la-Neuve</AddressLine>
                </Address>
                <Email>cook4me.contact@gmail.com</Email>
                <Phone>+32 479 50 68 41</Phone>
              </>
            ),
          },
        ]}
      />
      <Footer />
    </>
  );
}
