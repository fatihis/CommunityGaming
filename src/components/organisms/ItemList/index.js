import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { ItemCard } from "../ItemCard";
import { Paginationator } from "../../molecules/Paginationator";
export const ItemList = ({ page }) => {
  const [currentPage] = useState(page);
  const [nomineePerPage] = useState(6);
  const nomineeCtx = useContext(NomineeContext);
  const indexOfLastNominee = currentPage * nomineePerPage;
  const indexOfFirstNominee = indexOfLastNominee - nomineePerPage;
  const currentNominees = nomineeCtx.NomineeList.slice(
    indexOfFirstNominee,
    indexOfLastNominee
  );

  return (
    <div className="flex flex-col  px-72  xxl:px-48  xl:px-24 xmlg:px-10 lg:px-1">
      <div
        id="item-list-container"
        className=" flex flex-wrap min-height-web-kit  gap-4 items-center justify-center"
      >
        {currentNominees.map((element) => {
          return <ItemCard id={element.tournament_id}></ItemCard>;
        })}
      </div>
      <Paginationator
        currentPage={page}
        nomineePerPage="6"
        totalNominees={nomineeCtx.NomineeList.length}
      />
    </div>
  );
};

ItemList.propTypes = {
  page: PropTypes.number.isRequired,
};
