import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { chatUser } from "../../Redux/Action/action";

import "./UserComponent.css";

function UserComponent({ image, sortTitle, username, id }) {
  const dispatch = useDispatch();
  const [UserProfileImg, setUserProfileImg] = useState("");

  useEffect(() => {
    setUserProfileImg(`https://robohash.org/${Math.trunc(Math.random() * 10 + 1)}.png?set=set1&size=150x150`);
  }, []);

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
            <img src={image ? image : UserProfileImg} />
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
