import React from "react";

export const SimpleImage = ({ image, classes, ...properties }) => {
  return <img src={image} className={classes} {...properties} />;
};
