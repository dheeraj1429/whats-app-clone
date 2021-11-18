import React from "react";

import "./ChatNavbarComponent.css";

function ChatNavbarComponent({ image, subName }) {
  return (
    <div className="ChatNabvarComponent">
      <div className="ChatRoom_NavbarInner">
        <div className="ChatUserImg">
          <img src={image} />
        </div>
        <div className="ChatUserName">
          <h3>{subName}</h3>
        </div>
      </div>
    </div>
  );
}

export default ChatNavbarComponent;
