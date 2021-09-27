import React, { useState, createRef, useContext } from "react";
import PropTypes from "prop-types";
import { createPopper } from "@popperjs/core";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { SimpleImage } from "../../atoms/SimpleImage";
import sortIcon from "../../../assets/sort.png";
export const SortButton = ({ color }) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const ctxNominees = useContext(NomineeContext);
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-300")
    : (bgColor = "bg-" + color + "-300");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 ">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "aceh-bold ml-3 items-center flex gap-3 font-bold uppercase text-md px-10 py-4  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              <SimpleImage
                image={sortIcon}
                style={{ maxWidth: "1.1rem" }}
              ></SimpleImage>
              SORT BY
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "aceh-bold text-md  text-base z-50 float-left py-2 list-none text-left  shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <button
                className={
                  "aceh-bold text-md  py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "")
                }
                onClick={() => ctxNominees.sortNomineesBy("most")}
              >
                MOST POINTS
              </button>
              <button
                className={
                  "aceh-bold text-md  py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-blueGray-700" : "")
                }
                onClick={() => ctxNominees.sortNomineesBy("less")}
              >
                LEAST POINTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
SortButton.propTypes = {
  color: PropTypes.func.isRequired,
};
