import React, { useEffect, useState } from "react";

import PopUpComponent from "../PopupComponent/PopUpComponent";

import "./EmogiComponent.css";

function EmogiComponent() {
  const [EmogiCollection, setEmogiCollection] = useState([]);

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

  return (
    <div className="EmogiCardSection">
      <i class="fas fa-smile"></i>
      <PopUpComponent data={EmogiCollection} />
    </div>
  );
}

export default EmogiComponent;
