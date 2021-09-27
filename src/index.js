import React from "react";
import ReactDOM from "react-dom";
import "./utils/styles/BaseStyles.css";
import reportWebVitals from "./reportWebVitals";
import { NomineeContextProvider } from "./utils/contexts/NomineeContext";
import RouterContainer from "./pages/RouterContainer";
import { NotificationsProvider } from "reapop";
ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider>
      <NomineeContextProvider>
        <RouterContainer />
      </NomineeContextProvider>
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
