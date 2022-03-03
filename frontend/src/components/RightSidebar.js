import React from "react";
import RSidebarContent from "./RightSidebarContent";
import "./css/RightSidebar.css";

function RightSidebar() {
  return (
    <div className="widget">
      <div className="widget__header">
        <h5>Space to follow</h5>
      </div>
      <div className="widget__contents">
        <RSidebarContent />
      </div>
    </div>
  );
}

export default RightSidebar;
