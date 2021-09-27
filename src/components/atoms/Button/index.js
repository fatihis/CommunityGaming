import React from "react";
import PropTypes from "prop-types";
export const Button = ({ onClick, classes, children, ...properties }) => {
  return (
    <button onClick={onClick} className={classes + ""} {...properties}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node,
};
