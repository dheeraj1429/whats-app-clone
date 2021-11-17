import React from "react";

import SidebarComponent from "../SidebarComponent/SidebarComponent";
import ChatRoomComponent from "../ChatRoomComponent/ChatRoomComponent";

import { Routes, Route } from "react-router-dom";

import "./HomePageComponent.css";

function HomePageComponent() {
  return (
    <div className="HomePageContainer">
      <SidebarComponent />

      <Routes>
        <Route exact path="/room:Id" element={<ChatRoomComponent />} />
      </Routes>
    </div>
  );
}

export default HomePageComponent;
