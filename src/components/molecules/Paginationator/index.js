import React from "react";
import PropTypes from "prop-types";
import { ActionButton } from "../ActionButton";

export const Paginationator = ({
  nomineePerPage,
  totalNominees,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalNominees / nomineePerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="paginator flex mt-6 mb-6 flex items-center justify-center">
      {pageNumbers.map((number) =>
        number.toString() == currentPage ? (
          <ActionButton
            onClick={() => (window.location.href = "/nominees/" + number)}
            classes="text-white bg-gray-600 px-2 py-2 ml-2 font-bold"
          >
            {number}
          </ActionButton>
        ) : (
          <ActionButton
            onClick={() => (window.location.href = "/nominees/" + number)}
            classes="text-gray-600 px-2 py-2 ml-2 font-bold"
          >
            {number}
          </ActionButton>
        )
      )}
    </div>
  );
};
Paginationator.propTypes = {
  nomineePerPage: PropTypes.any.isRequired,
  totalNominees: PropTypes.any.isRequired,
  currentPage: PropTypes.any.isRequired,
};
