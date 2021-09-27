import React from "react";

export const Button = ({ onClick, classes, children, ...properties }) => {
  return (
    <button onClick={onClick} className={classes + ""} {...properties}>
      {children}
    </button>
  );
};
