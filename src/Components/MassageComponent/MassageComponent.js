import React from "react";

import { useSelector } from "react-redux";

import "./MassageComponent.css";

function MassageComponent({ data }) {
  const selector = useSelector((state) => state.user.currentUser);

  const { displayName } = selector;

  return (
    <div className={displayName == data.name ? `MassageComponent CurrentUserMassage` : "MassageComponent"}>
      <div>
        <p className="userName">{data.name}</p>
        <div className="Massage__InnerDiv">{data.massage}</div>
      </div>
    </div>
  );
}

export default MassageComponent;
