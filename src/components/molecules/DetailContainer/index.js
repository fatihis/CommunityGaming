import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TextBox } from "../../atoms/TextBox";
import { ActionButton } from "../ActionButton";
import { VoteButton } from "../VoteButton";
import { SimpleImage } from "../../atoms/SimpleImage";
import GarbageIcon from "../../../assets/delete.png";
import { RemoveModal } from "../RemoveModal";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { useHistory } from "react-router";

export const DetailContainer = ({ id }) => {
  const [dataState, setDataState] = useState({
    tournament_id: 0,
    tournament_name: "",
    winner: "",
    lastVoteDate: "",
    points: 0,
  });
  const nomineesCtx = useContext(NomineeContext);
  const history = useHistory();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickDelete = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    setDataState(nomineesCtx.getSingleElement(id));
  }, [dataState, id, nomineesCtx]);

  return (
    // detail padding
    <div className="detail-container px-4 flex flex-col   bg-gray-100 ">
      <TextBox classes="blooming-elegant text-2xl whitespace-nowrap  overflow-ellipsis overflow-hidden font-extrabold text-black mb-1">
        {dataState.tournament_name}
      </TextBox>
      <div className="flex">
        <TextBox classes="blooming-elegant line-height-10 text-lg overflow-ellipsis font-bold text-black">{`Winner : `}</TextBox>
        <TextBox classes="text-xs overflow-ellipsis text-black">{`${dataState.winner}`}</TextBox>
      </div>
      <div className="flex mb-4">
        <TextBox classes="blooming-elegant line-height-10 text-lg  overflow-ellipsis font-bold text-black">{`Last Vote Date : `}</TextBox>
        <TextBox classes="text-xs  overflow-ellipsis text-black">{` ${dataState.lastVoteDate}`}</TextBox>
      </div>
      <div className="relative">
        <div className="absolute left-0 flex max-w-max ">
          <VoteButton
            type="upvote"
            onClick={() => {
              nomineesCtx.voteNominee("up", id);
              history.push("/nominees/1");
            }}
          ></VoteButton>
          <VoteButton
            type="downvote"
            onClick={() => {
              nomineesCtx.voteNominee("down", id);
              history.push("/nominees/1");
            }}
          ></VoteButton>
        </div>
        <div className="absolute right-0 flex flex-col  w-4">
          <ActionButton classes="max-w-max " onClick={onClickDelete}>
            <SimpleImage
              classes="hover:bg-gray-200"
              style={{ maxWidth: "1rem" }}
              image={GarbageIcon}
            />
          </ActionButton>
        </div>
      </div>
      <RemoveModal id={id} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

DetailContainer.propTypes = {
  id: PropTypes.any.isRequired,
};
