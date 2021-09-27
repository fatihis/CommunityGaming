import React, { useEffect } from "react";
import nomineeJson from "../@db/tournaments.json";
export const LocalStorageProvider = () => {
  useEffect(() => {
    if (
      localStorage.getItem("NomineeList" || "[]") == null ||
      localStorage.getItem("NomineeList" || "[]").length < 1
    ) {
      localStorage.setItem("NomineeList", JSON.stringify(nomineeJson));
    }
  }, []);

  return <></>;
};
