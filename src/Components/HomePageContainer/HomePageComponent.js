import React from "react";

import SidebarComponent from "../SidebarComponent/SidebarComponent";
import ChatRoomComponent from "../ChatRoomComponent/ChatRoomComponent";

import "./HomePageComponent.css";

function HomePageComponent() {
  return (
    <div className="HomePageContainer">
      <SidebarComponent />
      <ChatRoomComponent />
    </div>
  );
}

export default HomePageComponent;
