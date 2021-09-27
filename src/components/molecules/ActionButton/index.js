import react from "react";
import { Button } from "../../atoms/Button";
import PropTypes from "prop-types";

export const ActionButton = ({ onClick, classes, children, ...properties }) => {
  return (
    <Button onClick={onClick} classes={classes} {...properties}>
      {children}
    </Button>
  );
};
ActionButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  children: PropTypes.node,
};
