import React, { useState, useEffect, useContext } from "react";
import { SimpleImage } from "../../atoms/SimpleImage";
import dota from "../../../assets/games/dota2jpg.jpg";
import { SquaredTextBlock } from "../SquaredTextBlock";
import { findTournaments } from "../../../utils/hooks/findTournaments";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
export const CardHeader = ({ image, id }) => {
  const [dataState, setDataState] = useState({
    tournament_id: 0,
    tournament_name: "",
    winner: "",
    lastVoteDate: "",
    points: 0,
  });
  const nomineesCtx = useContext(NomineeContext);

  useEffect(() => {
    setDataState(nomineesCtx.getSingleElement(id));
  }, [nomineesCtx]);
  return (
    <div className="relative min-h-full">
      <SimpleImage style={{ maxWidth: "100%" }} image={dota} />
      <div className="absolute top-2 left-2">
        <SquaredTextBlock point={nomineesCtx.getSingleElement(id).points} />
      </div>
    </div>
  );
};
