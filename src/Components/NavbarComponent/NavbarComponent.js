import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { auth } from "../../Firebase/firebase.util";

import "./NavbarComponent.css";

function NavbarComponent() {
  const [Photo, setPhoto] = useState("");
  const selector = useSelector((state) => state.user.currentUser);

  const res = async function () {
    const data = await selector;
    if (data) {
      const { photoURL } = selector;
      setPhoto(photoURL);
    }
  };

  res();

  return (
    <div className="NavbarComponent">
      <div className="Navbar__inner">
        <div className="UserProfile">
          <img className="user" src={Photo} />
        </div>
        <div className="UserDetails">
          <p onClick={() => auth.signOut()}>Log out</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
