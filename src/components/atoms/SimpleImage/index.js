import React from "react";
import PropTypes from "prop-types";

export const SimpleImage = ({ image, classes, alt, ...properties }) => {
  return (
    <img src={image} alt={" " + alt} className={classes} {...properties} />
  );
};
SimpleImage.propTypes = {
  image: PropTypes.any.isRequired,
  classes: PropTypes.string,
};
