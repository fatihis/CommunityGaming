import React from "react";
import { AddNomineeButton } from "../AddNomineeButton";
import { SortButton } from "../SortButton";

export const SortAddButtonContainer = () => {
  return (
    <div className="flex px-72 xxl:px-56 lg:px-0">
      <div className="justify-self-start flex-1">
        <AddNomineeButton />
      </div>
      <div className="justify-self-end ">
        <SortButton color="gray" />
      </div>
    </div>
  );
};
