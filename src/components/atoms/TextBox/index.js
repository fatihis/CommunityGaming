import React from "react";
import PropTypes from "prop-types";

export const TextBox = ({ children, classes, ...properties }) => {
  return <p className={classes}>{children}</p>;
};

TextBox.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.string,
};
