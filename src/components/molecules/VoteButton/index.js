import React from "react";
import { Button } from "../../atoms/Button";
import upVoteIcon from "../../../assets/votes/UpVote.png";
import downVoteIcon from "../../../assets/votes/DownVote.png";
import { SimpleImage } from "../../atoms/SimpleImage";
import { TextBox } from "../../atoms/TextBox";
export const VoteButton = ({ onClick, type, classes, ...properties }) => {
  return (
    <div className="flex-1 mb-4 min-h-full ">
      {/* rendering text in order to type */}
      {type === "upvote" ? (
        <Button
          onClick={onClick}
          classes={
            classes +
            "w-0.5 h-6 max-w-xs text-center text-white py-2 px-4 turquoise  flex items-center gap-x-1.5"
          }
          style={{ maxWidth: "4.2rem" }}
          {...properties}
        >
          <SimpleImage
            classes=""
            style={{ maxWidth: "0.75rem" }}
            image={upVoteIcon}
          />
          <TextBox classes="text-xs">UP</TextBox>
        </Button>
      ) : type === "downvote" ? (
        <Button
          onClick={onClick}
          classes={
            classes +
            "w-0.5 h-6 max-w-xs text-center text-white py-2 px-4 bg-white hover:bg-gray-100 turquoise-border  flex items-center justify-center gap-x-1.5"
          }
          style={{ maxWidth: "4.2rem" }}
          {...properties}
        >
          <SimpleImage
            classes=""
            style={{ maxWidth: "0.75rem" }}
            image={downVoteIcon}
          />
          <TextBox classes="text-xxs text-black ">DOWN</TextBox>
        </Button>
      ) : null}
    </div>
  );
};
