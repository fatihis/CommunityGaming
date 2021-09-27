import react from "react";
import { Button } from "../../atoms/Button";

export const ActionButton = ({ onClick, classes, children, ...properties }) => {
  return (
    <Button onClick={onClick} classes={classes} {...properties}>
      {children}
    </Button>
  );
};
