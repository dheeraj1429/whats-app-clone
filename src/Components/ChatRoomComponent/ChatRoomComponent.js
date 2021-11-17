import React, { useState } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../../Firebase/firebase.util";

import "./ChatRoomComponent.css";

function ChatRoomComponent() {
  const [Massage, setMassage] = useState("");
  const selector = useSelector((state) => state.user);

  const { chatUser } = selector;

  const ChangeMassageHandler = (e) => {
    setMassage(e.target.value);
  };

  const SendMassageHandler = (e) => {
    e.preventDefault();
    if (chatUser == []) return;
    const { id } = chatUser;
    console.log(id);

    firestore.collection("users").doc(id).collection("comments").add({
      Massage,
    });
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
          <i class="fas fa-paper-plane" onClick={SendMassageHandler}></i>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomComponent;
