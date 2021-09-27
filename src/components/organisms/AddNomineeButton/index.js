import React from "react";
import { SimpleImage } from "../../atoms/SimpleImage";

import { ActionButton } from "../../molecules/ActionButton";
import plusIcon from "../../../assets/plus.png";
import { TextBox } from "../../atoms/TextBox";
import { useHistory } from "react-router";
export const AddNomineeButton = () => {
  let history = useHistory();
  const goAddNominee = () => {
    history.push("/add-nominees");
  };
  return (
    <ActionButton onClick={goAddNominee}>
      <div className="flex turquoise items-center justify-center p-4 gap-1">
        <SimpleImage
          classes=""
          style={{ maxWidth: "1.1rem" }}
          image={plusIcon}
        />
        <TextBox classes="text-sm  font-bold ">ADD NOMINEE</TextBox>
      </div>
    </ActionButton>
  );
};
