import react from "react";

export const TextBox = ({ children, classes, ...properties }) => {
  return <p className={classes}>{children}</p>;
};
