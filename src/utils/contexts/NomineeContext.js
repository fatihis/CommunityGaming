import React, { useState, useEffect, createContext } from "react";
import dummyJson from "../@db/tournaments.json";
export const NomineeContext = createContext();
export const NomineeContextProvider = ({ children }) => {
  const [NomineeList, setNomineeList] = useState(
    JSON.parse(localStorage.getItem("NomineeList" || "[]")) == null ||
      JSON.parse(localStorage.getItem("NomineeList" || "[]")).length == 0
      ? dummyJson
      : JSON.parse(localStorage.getItem("NomineeList" || "[]"))
  );
  const [NomineeSlice, setNomineeSlice] = useState([]);
  const [currentPage, setCurrentPage] = useState("1");
  useEffect(() => {
    paginate();
  }, [currentPage]);
  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("NomineeList" || "[]")) == null ||
      JSON.parse(localStorage.getItem("NomineeList" || "[]")).length == 0
    ) {
      localStorage.setItem("NomineeList", JSON.stringify(dummyJson));
    }
    paginate();
  }, []);
  const addNominee = (data) => {
    let nominees = NomineeList == null ? [] : NomineeList;
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
    paginate();
    return NomineeList;
  };
  const removeNominee = (id) => {
    let nominees = NomineeList;
    var foundIndex = nominees.findIndex((x) => x.tournament_id === id);
    nominees.splice(foundIndex, 1);

    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
    paginate();
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
    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
  };

  const sortNomineesBy = (type) => {
    debugger;
    let nominees = NomineeList;
    if (type === "less") {
      nominees.sort((a, b) =>
        a.points > b.points
          ? 1
          : a.points === b.points
          ? !isNewer(a.lastVoteDate, b.lastVoteDate)
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
          ? !isNewer(a.lastVoteDate, b.lastVoteDate)
            ? 1
            : -1
          : -1
      );
    }
    setNomineeList(nominees);
    localStorage.setItem("NomineeList", JSON.stringify(nominees));
    paginate();
  };
  const isNewer = (dateOne, dateTwo) => {
    var today = new Date();
    var dateOneSeconds = (new Date(dateOne).getTime() - today.getTime()) / 1000;
    var dateTwoSeconds = (new Date(dateTwo).getTime() - today.getTime()) / 1000;
    const isNew = dateOneSeconds > dateTwoSeconds ? true : false;
    return isNew;
  };

  const paginate = () => {
    const nomineePerPage = 6;
    const indexOfLastNominee = currentPage * nomineePerPage;
    const indexOfFirstNominee = indexOfLastNominee - nomineePerPage;
    setNomineeSlice(
      JSON.parse(localStorage.getItem("NomineeList")) === null &&
        NomineeList == null
        ? 0
        : NomineeList.slice(indexOfFirstNominee, indexOfLastNominee)
    );
  };
  const contextValue = {
    NomineeList,
    NomineeSlice,
    setNomineeList,
    paginate,
    voteNominee,
    addNominee,
    removeNominee,
    getSingleElement,
    getAllElements,
    sortNomineesBy,
    currentPage,
    setCurrentPage,
  };

  return (
    <NomineeContext.Provider value={contextValue}>
      {children}
    </NomineeContext.Provider>
  );
};
