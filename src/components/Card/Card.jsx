import React from "react";
import { CardBox, MinBox, VariantH6 } from "../../Styled/Pages";
import { Para } from "../../Styled/GlobalStyles";

const Card = ({ title, figure, chart }) => {
  return (
    <CardBox>
      <MinBox>
        <Para>{title}</Para>
        <VariantH6>{figure}</VariantH6>
      </MinBox>
      {chart}
    </CardBox>
  );
};

export default Card;
