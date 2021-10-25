import React, { useState } from "react";

import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-7.svg";

import MealCard from "./meal-card.js";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default function TabCardGrid({ heading, tabs, handleOrderClick }) {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[1]);

  return (
    <Container>
      <HeaderRow>
        <Header>{heading && heading}</Header>
        {/* TODO: Refactor pour supprimer la barre de menu */}
        <TabsControl>
          {tabs &&
            Object.keys(tabs).map(
              (tabName, index) =>
                tabs[tabName].length > 0 && (
                  <TabControl
                    key={index}
                    active={activeTab === tabName}
                    onClick={() => setActiveTab(tabName)}
                  >
                    {tabName}
                  </TabControl>
                )
            )}
        </TabsControl>
      </HeaderRow>

      {/* TODO: Rajouter date & heure de pickup */}
      {/* TODO: Rajouter photos des plas */}
      {/* TODO: Rajouter profil du cooker */}
      {tabs &&
        tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
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
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs &&
              tabs[tabKey].map((card, index) => (
                <MealCard
                  card={card}
                  key={index}
                  handleOrderClick={handleOrderClick}
                />
              ))}
          </TabContent>
        ))}

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
}
