import React from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { chatUser } from "../../Redux/Action/action";

import "./UserComponent.css";

function UserComponent({ image, sortTitle, username, id }) {
  const dispatch = useDispatch();

  return (
    <Link to={`room:${id}`}>
      <div
        className="User"
        onClick={() => {
          dispatch(
            chatUser({
              image,
              username,
              id,
            })
          );
        }}
      >
        <div className="User__Details">
          <div className="UserProfileDiv">
            <img src={image} />
          </div>
          <div className="About__User">
            <h3>{username}</h3>
            <p>{sortTitle}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserComponent;
