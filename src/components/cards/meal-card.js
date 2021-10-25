import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as StarIcon } from "../../images/star-icon.svg";
import { css } from "styled-components/macro"; //eslint-disable-line
import { storage } from "../../lib/firebase";
import { addMealToUserCart } from "../../services/firebase";

const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardCookerContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardCooker = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const CardDueDate = tw.p`mt-1 text-sm font-medium text-gray-600`;
// const CardDueTime = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardQty = tw.p`mt-1 text-sm font-medium text-gray-600`;

export default function MealCard({ card, handleOrderClick }) {
  const [imgUrl, setImgUrl] = useState(null);
  const mealsPicturesRef = storage.ref("meals");

  useEffect(() => {
    async function getImgUrl() {
      await mealsPicturesRef
        .child(`${card.id}.png`)
        .getDownloadURL()
        .then((url) => {
          setImgUrl(url);
        })
        .catch((error) => {
          console.log(error);
        });
      return imgUrl;
    }
    getImgUrl();
  }, []); //eslint-disable-line

  function handleClick() {
    if (handleOrderClick) {
      handleOrderClick(card.mealId);
    }
  }

  return (
    <CardContainer>
      <Card
        className="group"
        href={card.url}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <CardImageContainer imageSrc={imgUrl}>
          <CardCookerContainer>
            <CardCooker>
              {/* TODO: Add cooker picture on top of the image */}
            </CardCooker>
          </CardCookerContainer>
          <CardRatingContainer>
            <CardRating>
              <StarIcon />
              {card.rating}
            </CardRating>

            <CardReview>({card.reviews})</CardReview>
          </CardRatingContainer>
          <CardHoverOverlay
            variants={{
              hover: {
                opacity: 1,
                height: "auto",
              },
              rest: {
                opacity: 0,
                height: 0,
              },
            }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <CardButton onClick={handleClick}>Commander</CardButton>
            </div>
          </CardHoverOverlay>
        </CardImageContainer>
        <CardText>
          <CardDueDate>
            A venir chercher le
            {card.dateAvailable &&
              ` ` +
                card.dateAvailable.toDate().toLocaleDateString() +
                ` à ` +
                card.dateAvailable.toDate().toLocaleTimeString()}
          </CardDueDate>
          <CardQty>Il reste {card.qtyAvailable} portions</CardQty>
          {/* TODO: Limiter le nombre de caractères dans le title */}
          <CardTitle>{card.title}</CardTitle>
          {/* TODO: Limiter le nombre de caractères dans la desc */}
          <CardContent>{card.desc}</CardContent>
          <CardPrice>{card.price} €</CardPrice>
        </CardText>
      </Card>
    </CardContainer>
  );
}
