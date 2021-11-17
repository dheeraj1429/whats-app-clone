import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { firestore } from "../../Firebase/firebase.util";
import { useParams } from "react-router";
import MassageComponent from "../MassageComponent/MassageComponent";

import "./ChatRoomComponent.css";

function ChatRoomComponent() {
  const [Massage, setMassage] = useState("");
  const [UserMassages, setUserMassages] = useState([]);
  const selector = useSelector((state) => state.user);
  const param = useParams();

  const paramId = param.Id.split(":");

  const ChangeMassageHandler = (e) => {
    setMassage(e.target.value);
  };

  const SendMassageHandler = (e) => {
    e.preventDefault();

    firestore.collection("users").doc(paramId[1]).collection("massages").add({
      massage: Massage,
      name: "dheeraj",
    });
  };

  useEffect(() => {
    firestore
      .collection("users")
      .doc(paramId[1])
      .collection("massages")
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
      <div className="ChatInnerDiv">
        {UserMassages.map((el) => (
          <MassageComponent key={el.id} data={el.data} />
        ))}
      </div>
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
