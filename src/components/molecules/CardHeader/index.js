import React from "react";
import { SimpleImage } from "../../atoms/SimpleImage";
import { SquaredTextBlock } from "../SquaredTextBlock";
import PropTypes from "prop-types";
export const CardHeader = ({ item }) => {
  return (
    <div className="relative min-h-full">
      <SimpleImage style={{ maxWidth: "100%" }} image={item.imgUrl} />
      <div className="absolute top-2 left-2">
        <SquaredTextBlock point={item.points} />
      </div>
    </div>
  );
};

CardHeader.propTypes = {
  id: PropTypes.any.isRequired,
  image: PropTypes.any,
};
