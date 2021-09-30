import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { ItemCard } from "../ItemCard";
import { Paginationator } from "../../molecules/Paginationator";
import { TextBox } from "../../atoms/TextBox";
export const ItemList = ({ page }) => {
  const nomineeCtx = useContext(NomineeContext);

  const [isListEmpty] = useState(
    JSON.parse(localStorage.getItem("NomineeList")) === null &&
      nomineeCtx.NomineeList == null
  );
  return (
    <div className="flex flex-col  px-72  xxl:px-48  xl:px-24 xmlg:px-10 lg:px-1">
      <div
        id="item-list-container"
        className=" flex flex-wrap min-height-web-kit  gap-4 items-center justify-center"
      >
        {!isListEmpty &&
          nomineeCtx.NomineeSlice.map((element) => {
            return (
              <ItemCard
                key={element.id}
                item={element}
                id={element.tournament_id}
              ></ItemCard>
            );
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
