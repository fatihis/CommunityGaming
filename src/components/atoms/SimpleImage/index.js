import React from "react";
import PropTypes from "prop-types";

export const SimpleImage = ({ image, classes, ...properties }) => {
  return <img src={image} className={classes} {...properties} />;
};
SimpleImage.propTypes = {
  image: PropTypes.any.isRequired,
  classes: PropTypes.string,
};
