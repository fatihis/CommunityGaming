import React from "react";
import { TextBox } from "../../atoms/TextBox";

export const SquaredTextBlock = ({ point }) => {
  return (
    <div className="turquoise pointer-events-none w-12 h-12 flex flex-col  items-center justify-center p-7">
      <TextBox classes="font-extrabold text-3xl mb-4 blooming-elegant line-height-10">
        {point}
      </TextBox>
      <TextBox classes="text-xxs  font-semibold">POINTS</TextBox>
    </div>
  );
};
