import React, { useEffect, useState } from "react";

import PopUpComponent from "../PopupComponent/PopUpComponent";

import "./EmogiComponent.css";

function EmogiComponent({ onClick }) {
  const [EmogiCollection, setEmogiCollection] = useState([]);
  const [ShowEmogiCard, setShowEmogiCard] = useState(false);

  useEffect(() => {
    const res = async function () {
      await fetch(`https://unpkg.com/emoji.json@13.1.0/emoji.json`)
        .then((res) => res.json())
        .then((data) => {
          setEmogiCollection(data);
        });
    };
    res();
  }, []);

  const changeStateHandler = () => {
    ShowEmogiCard == false ? setShowEmogiCard(true) : setShowEmogiCard(false);
  };

  return (
    <div className="EmogiCardSection">
      <i class="fas fa-smile" onClick={changeStateHandler}></i>
      <PopUpComponent data={EmogiCollection} onClick={onClick} className={ShowEmogiCard == true ? "ShowEmogi" : ""} />
    </div>
  );
}

export default EmogiComponent;
