import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import TextLoop from "react-text-loop";

import Hero from "../components/hero/TwoColumnWithVideo.js";
import Features from "../components/features/ThreeColSimple.js";
import MainFeature from "../components/features/TwoColWithButton.js";
import TabGrid from "../components/cards/TabCardGrid.js";
import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "../components/cta/DownloadApp.js";
import Footer from "../components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "../images/chef-icon.svg";
import celebrationIconImageSrc from "../images/celebration-icon.svg";
import shopIconImageSrc from "../images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  return (
    <>
      <Hero
        heading={
          <>
            Ton voisin te prépare un plat{" "}
            <HighlightedText>délicieux & abordable</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Commander"
        watchVideoButtonText="Découvre les Cookers"
      />
      <MainFeature
        subheading={<Subheading>Depuis 2019 sur Louvain-La-Neuve</Subheading>}
        heading={
          <>
            Un large choix
            <wbr /> <HighlightedText>de repas de qualité.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="Voir les plats du jour"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Qu'est ce qu'ils nous <HighlightedText>mijotent?</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Un service de <HighlightedText>qualité.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: "Une ville",
            description:
              "Nous nous concentrons d'abord sur l'essentiel, nous rêvons ensuite.",
            url: "https://google.com",
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Des Cookers sélectionnés",
            description:
              "Chaque cooker à du passer une interview afin de montrer sa motivation.",
            url: "https://timerse.com",
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: "Un bon plat, à petit prix",
            description:
              "Malgré le service apporté, les plats restent abordables.",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />

      <Testimonial
        subheading=""
        heading={
          <>
            Je suis{" "}
            <HighlightedText>
              <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                <span>ravi.</span>
                <span>impressioné.</span>
                <span>rassasié.</span>
              </TextLoop>
            </HighlightedText>
          </>
        }
      />
      <DownloadApp
        text={
          <>
            Les gens autour de vous commandent facilement avec l'app{" "}
            <HighlightedTextInverse>Cook4Me.</HighlightedTextInverse>
          </>
        }
      />
      <Footer />
    </>
  );
};
