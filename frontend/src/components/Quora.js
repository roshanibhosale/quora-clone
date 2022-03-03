import React from "react";
import Feed from "./Feed";
import QuoraHeader from "./QuoraHeader";
import LSidebar from "./LeftSidebar";
import RSidebar from "./RightSidebar";
import "./css/Quora.css";

function Quora() {
  return (
    <div className="quora">
      <QuoraHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <LSidebar />
          <Feed />
          <RSidebar />
        </div>
      </div>
    </div>
  );
}

export default Quora;
