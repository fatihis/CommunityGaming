import React, { useState, createContext } from "react";
export const NomineeContext = createContext();
export const NomineeContextProvider = ({ children }) => {
  const [NomineeList, setNomineeList] = useState(
    JSON.parse(localStorage.getItem("NomineeList" || "[]"))
  );

  const addNominee = (data) => {
    let nominees = NomineeList;
    let date = new Date();
    let today =
      ("00" + date.getDate()).slice(-2) +
      "." +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "." +
      date.getFullYear() +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2);

    nominees.push({
      tournament_id: nominees.length,
      tournament_name: data.name,
      winner: data.winner,
      lastVoteDate: today,
      points: 0,
      imgUrl: data.imgUrl,
    });
    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
  };
  const getSingleElement = (id) => {
    let nominees = NomineeList;
    var item = nominees.find((x) => x.tournament_id === id);
    return item;
  };
  const getAllElements = () => {
    return NomineeList;
  };
  const removeNominee = (id) => {
    let nominees = NomineeList;
    var foundIndex = nominees.findIndex((x) => x.tournament_id === id);
    nominees.splice(foundIndex, 1);
    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
    window.location.href = "/nominees/1";
  };

  const voteNominee = (type, id) => {
    let nominees = NomineeList;
    let date = new Date();
    let today =
      ("00" + date.getDate()).slice(-2) +
      "." +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "." +
      date.getFullYear() +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2);
    var foundIndex = nominees.findIndex((x) => x.tournament_id === id);
    let obj = nominees[foundIndex];
    if (type === "up") {
      Object.assign(nominees[foundIndex], { points: obj.points + 1 });
      Object.assign(nominees[foundIndex], { lastVoteDate: today });
    } else if (type === "down" && obj.points !== 0) {
      Object.assign(nominees[foundIndex], { points: obj.points - 1 });
      Object.assign(nominees[foundIndex], { lastVoteDate: today });
    }
    var element = nominees[foundIndex];
    nominees.splice(foundIndex, 1);
    nominees.splice(0, 0, element);
    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
    window.location.href = "/nominees/1";
  };

  const sortNomineesBy = (type) => {
    let nominees = NomineeList;
    if (type === "less") {
      nominees.sort((a, b) =>
        a.points > b.points
          ? 1
          : a.points === b.points
          ? new Date(a.lastVoteDate).getTime() - new Date() <
            new Date(b.lastVoteDate).getTime() - new Date()
            ? 1
            : -1
          : -1
      );
    }
    if (type === "most") {
      nominees.sort((a, b) =>
        a.points < b.points
          ? 1
          : a.points === b.points
          ? new Date(a.lastVoteDate).getTime() - new Date() <
            new Date(b.lastVoteDate).getTime() - new Date()
            ? 1
            : -1
          : -1
      );
    }
    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
    window.location.href = "/nominees/1";
  };
  const contextValue = {
    NomineeList,
    setNomineeList,
    voteNominee,
    addNominee,
    removeNominee,
    getSingleElement,
    getAllElements,
    sortNomineesBy,
  };

  return (
    <NomineeContext.Provider value={contextValue}>
      {children}
    </NomineeContext.Provider>
  );
};
