import React from "react";
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

// <div className="flex max-w-max">
//   <VoteButton type="upvote" onClick={hey}></VoteButton>
//   <VoteButton type="downvote" onClick={hey}></VoteButton>
// </div>;
