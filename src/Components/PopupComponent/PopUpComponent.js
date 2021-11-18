import React from "react";
import { useDispatch } from "react-redux";
import { emogiChatSet } from "../../Redux/Action/action";

import "./PopUpComponent.css";

function PopUpComponent({ data }) {
  const dispatch = useDispatch();

  return (
    <div className="PopUpComponent">
      {data.map((el) => (
        <p key={el.codes} onClick={() => dispatch(emogiChatSet(el.char))}>
          {el.char}
        </p>
      ))}
    </div>
  );
}

export default PopUpComponent;
