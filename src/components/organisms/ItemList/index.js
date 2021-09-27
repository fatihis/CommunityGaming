import React, { useContext, useState } from "react";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { ItemCard } from "../ItemCard";
import ReactDOM from "react-dom";
import { Paginationator } from "../../molecules/Paginationator";
export const ItemList = ({ page }) => {
  const [currentPage, setCurrentPage] = useState(page);
  const [nomineePerPage, setNomineePerPage] = useState(6);
  const nomineeCtx = useContext(NomineeContext);
  const indexOfLastNominee = currentPage * nomineePerPage;
  const indexOfFirstNominee = indexOfLastNominee - nomineePerPage;
  const currentNominees = nomineeCtx.NomineeList.slice(
    indexOfFirstNominee,
    indexOfLastNominee
  );

  return (
    <div className="flex flex-col px-72">
      <div
        id="item-list-container"
        className=" flex flex-wrap min-height-web-kit  gap-4 "
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

{
  /* <NomineeContext.Consumer>
{(ctx) => {
  return ctx.NomineeList.map((element) => {
    return <ItemCard id={element.tournament_id}></ItemCard>;
  });
}}
</NomineeContext.Consumer> */
}
