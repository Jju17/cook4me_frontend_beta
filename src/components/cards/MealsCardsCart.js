import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-7.svg";
import MealCardCart from "./meal-card-cart.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;
const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

export default function MealsCardsCart({ heading, meals }) {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const [myMeals, setMyMeals] = useState(null);

  useEffect(() => {
    setMyMeals(meals);
  }, [meals]);

  return (
    <Container>
      <HeaderRow>
        <Header>{heading && heading}</Header>
      </HeaderRow>

      {/* TODO: Rajouter date & heure de pickup */}
      {/* TODO: Rajouter photos des plas */}
      {/* TODO: Rajouter profil du cooker */}

      <TabContent
        variants={{
          current: {
            opacity: 1,
            scale: 1,
            display: "flex",
          },
          hidden: {
            opacity: 0,
            scale: 0.8,
            display: "none",
          },
        }}
        transition={{ duration: 0.4 }}
      >
        {myMeals &&
          myMeals.map((card, index) => (
            <MealCardCart card={card} key={index} />
          ))}
      </TabContent>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
}
