import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TextBox } from "../../components/atoms/TextBox";
import { ActionButton } from "../../components/molecules/ActionButton";
import { InputBox } from "../../components/molecules/InputBox";
import { Header } from "../../components/organisms/Header";
import { NomineeContext } from "../../utils/contexts/NomineeContext";
import NotificationsSystem, {
  bootstrapTheme,
  useNotifications,
  setUpNotifications,
} from "reapop";
export const AddNomineePage = () => {
  const [tournamentName, setTournamentName] = useState("");
  const [winnerName, setWinnerName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const { notifications, dismissNotification, notify } = useNotifications();
  setUpNotifications({
    defaultProps: {
      position: "top-center",
      dismissible: true,
    },
  });
  const goBack = () => {
    window.location.href = "/nominees/1";
  };
  useEffect(() => {
    console.log("hey");
  }, []);

  const ctxNominee = useContext(NomineeContext);
  return (
    <div className=" h-full flex flex-col">
      <Header />
      <NotificationsSystem
        notifications={notifications}
        // 3. Pass the function used to dismiss a notification.
        dismissNotification={(id) => dismissNotification(id)}
        // 4. Pass a builtIn theme or a custom theme.
        theme={bootstrapTheme}
      />
      <div className=" h-full mx-96 mt-10 2xl:mx-40 lg:mx-4 relative">
        <div className="absolute -top-8 left-0">
          <ActionButton
            className="bg-gray-100 px-6 py-4 font-bold text-lg leading-none "
            onClick={goBack}
          >
            GO BACK
          </ActionButton>
        </div>
      </div>

      <div className="input-wrapper w-full h-full mt-5 px-96 md:px-10 lg:px-24 lg:w-auto flex flex-col items-center justify-center ">
        <TextBox classes="aceh-bold text-xl"> ADD NEW NOMINEE</TextBox>
        <div className="input-container w-full h-full  px-40   xxl:px-28 xl:px-10 xmlg:px-0">
          <InputBox
            header="Tournament Name"
            onChange={setTournamentName}
          ></InputBox>
          <InputBox
            header="Tournament Winner Team"
            onChange={setWinnerName}
          ></InputBox>
          <InputBox header="Cover Image Url" onChange={setImgUrl}></InputBox>
          <div className="add-nominee-button flex justify-end">
            <ActionButton
              className="bg-gray-100 mt-5 px-6 py-4 font-bold text-lg leading-none text-green-6AD"
              onClick={() => {
                ctxNominee.addNominee({
                  name: tournamentName,
                  winner: winnerName,
                  imgUrl: imgUrl,
                });
                notify("New nominee added to nominees", "success");
              }}
            >
              ADD NOMINEE
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};
