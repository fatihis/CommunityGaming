import React from "react";
import PropTypes from "prop-types";
export const Input = ({ type, onChange, placeholder, ...properties }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      {...properties}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
