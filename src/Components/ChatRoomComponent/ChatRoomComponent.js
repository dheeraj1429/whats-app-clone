import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../../Firebase/firebase.util";
import { useParams } from "react-router";
import MassageComponent from "../MassageComponent/MassageComponent";
import firebase from "@firebase/app-compat";
import ChatNavbarComponent from "../chatNavbarComponent/ChatNavbarComponent";

import EmogiComponent from "../EmogiComponent/EmogiComponent";
import "./ChatRoomComponent.css";

function ChatRoomComponent() {
  const [Massage, setMassage] = useState("");
  const [UserMassages, setUserMassages] = useState([]);
  const selector = useSelector((state) => state.user);
  const param = useParams();

  const { displayName } = selector.currentUser;
  const { image, username } = selector.chatUser;

  const paramId = param.Id.split(":");

  // if (selector.charSet.length > 0) {
  //   const charData = selector.charSet.join(" ");
  //   console.log(charData);
  // }

  const ChangeMassageHandler = (e) => {
    setMassage(...e.target.value);
  };

  const SendMassageHandler = (e) => {
    e.preventDefault();

    firestore
      .collection("users")
      .doc(paramId[1])
      .collection("massages")
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        massage: Massage,
        name: displayName,
      })
      .catch((err) => {
        console.log(err);
      });

    setMassage("");
  };

  useEffect(() => {
    firestore
      .collection("users")
      .doc(paramId[1])
      .collection("massages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapShot) => {
        setUserMassages(
          snapShot.docs.map((el) => ({
            id: el.id,
            data: el.data(),
          }))
        );
      });
  }, [paramId[1]]);

  return (
    <div className="ChatRoomComponent">
      <ChatNavbarComponent image={image} subName={username} />

      <div className="ChatInnerDiv">
        {UserMassages.map((el) => (
          <MassageComponent key={el.id} data={el.data} />
        ))}
      </div>
      <div className="MassageDiv">
        <div className="EmogiDiv">{/* <EmogiComponent /> */}</div>
        <div className="SendMassageDiv">
          <input type="text" value={Massage} onChange={ChangeMassageHandler} className="SendMassageInput" />
        </div>
        <div className="VoiceMassageDiv">
          <i class="fas fa-paper-plane" onClick={SendMassageHandler}></i>
        </div>
      </div>
    </div>
  );
}

export default ChatRoomComponent;
