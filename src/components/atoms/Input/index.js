import React from "react";

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
