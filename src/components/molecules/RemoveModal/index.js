import React, { useContext } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import { NomineeContext } from "../../../utils/contexts/NomineeContext";
import { TextBox } from "../../atoms/TextBox";
import { ActionButton } from "../ActionButton";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ededed",
  },
};

Modal.setAppElement("body");

export const RemoveModal = ({ isOpen, setIsOpen, item }) => {
  const nomineesCtx = useContext(NomineeContext);

  function closeModal() {
    setIsOpen(false);
  }
  const removeElement = () => {
    nomineesCtx.removeNominee(item.tournament_id);
    closeModal();
  };

  return (
    <div className="h-full mb-8">
      <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
        <div className=" w-96 h-60  xs:max-w-max">
          <div className="w-full h-12 flex items-start justify-start border-b-2">
            <TextBox classes="font-bold text-xl " className="text">
              Remove Nominee
            </TextBox>
          </div>
          <div className=" w-full h-32 flex flex-col items-center justify-center">
            <div className="flex">
              {" "}
              <p className="aceh-bold">Do you want to remove "</p>
              <p className="aceh-bold  font-extrabold">
                {item.tournament_name}
              </p>
            </div>
            <p className="aceh-bold">from nominees?</p>
          </div>
          <div className="flex relative h-20 ">
            <ActionButton
              classes="absolute bottom-6  left-6 px-2 py-2"
              onClick={closeModal}
            >
              <p className="font-extrabold  text-gray-600">CANCEL</p>
            </ActionButton>
            <ActionButton
              classes="absolute bottom-6 right-6  px-2 py-2 bg-red-400"
              onClick={removeElement}
            >
              <p className="font-extrabold  text-gray-600 w-20 text-white">
                OK
              </p>
            </ActionButton>
          </div>
        </div>
      </Modal>
    </div>
  );
};

RemoveModal.propTypes = {
  id: PropTypes.any.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
