import React from "react";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "../components/headers/light.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";
import MainFeature1 from "../components/features/TwoColWithButton.js";
import * as ROUTES from "../constants/routes";

import Features from "../components/features/ThreeColSimple.js";
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js";

// import SupportIconImage from "../images/support-icon.svg";
import ShieldIconImage from "../images/shield-icon.svg";
import CustomerLoveIconImage from "../images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default function AboutUs() {
  return (
    <>
      <Header />
      <MainFeature1
        subheading={<Subheading>A propos de Cook4Me</Subheading>}
        heading="Nous sommes une jeune startup."
        description="Cook4Me est une plate-forme collaborative ayant pour mission la vente de plats entre particuliers créée en novembre 2019 par des étudiants de Louvain-la-Neuve. Cook4Me propose donc aux passionnés de cuisine de mettre en vente leurs créations à un public de proximité. Nous avons créé un groupe Facebook (2200 membres à ce jour) afin de développer notre communauté."
        buttonRounded={false}
        primaryButtonText=""
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
      />
      <MainFeature1
        subheading={<Subheading>Notre Vision</Subheading>}
        heading="Nous comptons."
        description="On compte faire quoi au juste ?"
        buttonRounded={false}
        primaryButtonText="Contacte-nous"
        primaryButtonUrl={ROUTES.CONTACT_US}
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Nos Valeurs</Subheading>}
        heading="Les voici."
        description="Le plus important dans la création d'un projet entrepreneurial, c'est de choisir méticuleusement ses valeurs, et de s'y tenir."
        cards={[
          {
            imageSrc: ShieldIconImage,
            title: "Une équipe soudée",
            description:
              "Nous organisons régulièrement des activités afin que les Cookers puissent se rencontrer, échanger, et surtout nous donner un vrai feedback sur des choses que nous ne voyosn pas forcément.",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Des Cookers Passionnés",
            description:
              "Si on veut entrer au sein de Cook4Me, il faudra montrer que la cuisine est plus qu'un simple passe-temps.",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Notre équipe</Subheading>} />
      <Footer />
    </>
  );
}
