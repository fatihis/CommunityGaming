import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { ItemCard } from "../ItemCard";
import { Paginationator } from "../../molecules/Paginationator";
import { TextBox } from "../../atoms/TextBox";
export const ItemList = ({ page }) => {
  const [currentPage] = useState(page);
  const [nomineePerPage] = useState(6);
  const [isListEmpty, setIsListEmpty] = useState(
    JSON.parse(localStorage.getItem("NomineeList")) === null
  );
  const nomineeCtx = useContext(NomineeContext);
  const indexOfLastNominee = currentPage * nomineePerPage;
  const indexOfFirstNominee = indexOfLastNominee - nomineePerPage;
  const currentNominees = isListEmpty
    ? 0
    : nomineeCtx.NomineeList.slice(indexOfFirstNominee, indexOfLastNominee);

  return (
    <div className="flex flex-col  px-72  xxl:px-48  xl:px-24 xmlg:px-10 lg:px-1">
      <div
        id="item-list-container"
        className=" flex flex-wrap min-height-web-kit  gap-4 items-center justify-center"
      >
        {!isListEmpty &&
          currentNominees.map((element) => {
            return <ItemCard id={element.tournament_id}></ItemCard>;
          })}
      </div>

      {!isListEmpty && (
        <Paginationator
          currentPage={page}
          nomineePerPage="6"
          totalNominees={nomineeCtx.NomineeList.length}
        />
      )}
      {isListEmpty && (
        <TextBox classes="font-bold text-xl">Nothing to see here...</TextBox>
      )}
    </div>
  );
};

ItemList.propTypes = {
  page: PropTypes.number.isRequired,
};
