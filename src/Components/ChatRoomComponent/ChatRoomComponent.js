import React, { useState, useEffect } from "react";

import "./ChatRoomComponent.css";

function ChatRoomComponent() {
  const [Massage, setMassage] = useState("");

  const ChangeMassageHandler = (e) => {
    setMassage(e.target.value);
  };

  return (
    <div className="ChatRoomComponent">
      <div className="ChatInnerDiv"></div>
      <div className="MassageDiv">
        <div className="EmogiDiv">
          <i class="fas fa-smile"></i>
        </div>
        <div className="SendMassageDiv">
          <input type="text" value={Massage} onChange={ChangeMassageHandler} />
        </div>
        <div className="VoiceMassageDiv">
          <i class="fas fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomComponent;
