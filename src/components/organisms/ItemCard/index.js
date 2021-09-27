import React from "react";
import PropTypes from "prop-types";
import { CardHeader } from "../../molecules/CardHeader";
import { DetailContainer } from "../../molecules/DetailContainer";

export const ItemCard = ({ id }) => {
  return (
    <div className="w-64 m-4">
      <div>
        <CardHeader id={id}></CardHeader>
      </div>
      <DetailContainer id={id}></DetailContainer>
    </div>
  );
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
};
