import React from "react";

import "./MassageComponent.css";

function MassageComponent({ data }) {
  return (
    <div className="MassageComponent">
      <div>
        <p className="userName">{data.name}</p>
        <div className="Massage__InnerDiv">{data.massage}</div>
      </div>
    </div>
  );
}

export default MassageComponent;
