import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import { motion } from "framer-motion";
import styled from "styled-components";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { ReactComponent as StarIcon } from "../../images/star-icon.svg";
import { css } from "styled-components/macro"; //eslint-disable-line
import { getImgUrl } from "../../services/firebase";
import { firebase, storage } from "../../lib/firebase";

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
const CardDueTime = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardQty = tw.p`mt-1 text-sm font-medium text-gray-600`;

export default function MealCard({
  url,
  rating,
  reviews,
  qtyAvailable,
  title,
  desc,
  price,
  id,
  dateAvailable,
}) {
  const [imgUrl, setImgUrl] = useState(null);
  const mealsPicturesRef = storage.ref("meals");

  useEffect(() => {
    async function getImgUrl() {
      await mealsPicturesRef
        .child(`${id}.png`)
        .getDownloadURL()
        .then((url) => {
          setImgUrl(url);
        })
        .catch((error) => {
          console.log(error);
        });

      //   console.log("imgUrl", imgUrl);
      return imgUrl;
    }
    getImgUrl();
  }, []);

  return (
    <CardContainer>
      <Card
        className="group"
        href={url}
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        <CardImageContainer imageSrc={imgUrl}>
          <CardCookerContainer>
            <CardCooker></CardCooker>
          </CardCookerContainer>
          <CardRatingContainer>
            <CardRating>
              <StarIcon />
              {rating}
            </CardRating>
            <CardReview>({reviews})</CardReview>
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
            <CardButton>Commander</CardButton>
          </CardHoverOverlay>
        </CardImageContainer>
        <CardText>
          <CardDueDate>
            A venir chercher le
            {dateAvailable &&
              ` ` +
                dateAvailable.toDate().toLocaleDateString() +
                ` à ` +
                dateAvailable.toDate().toLocaleTimeString()}
          </CardDueDate>
          <CardQty>Il reste {qtyAvailable} portions</CardQty>
          <CardTitle>{title}</CardTitle>
          <CardContent>{desc}</CardContent>
          <CardPrice>{price} €</CardPrice>
        </CardText>
      </Card>
    </CardContainer>
  );
}
