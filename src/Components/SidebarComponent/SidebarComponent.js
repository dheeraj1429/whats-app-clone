import React, { useState, useEffect } from "react";

import NavbarComponent from "../NavbarComponent/NavbarComponent";
import SearchComponent from "../SearchComponent/SearchComponent";
import UserComponent from "../UserComponent/UserComponent";

import { firestore } from "../../Firebase/firebase.util";

import "./SidebarComponent.css";

function SidebarComponent() {
  const [AllUsers, setAllUsers] = useState([]);

  useEffect(() => {
    firestore.collection("users").onSnapshot((snapShot) => {
      setAllUsers(
        snapShot.docs.map((el) => ({
          id: el.id,
          data: el.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="SidebarComponent">
      <NavbarComponent />
      <SearchComponent />

      {/* All users */}

      {AllUsers.map((el) => (
        <UserComponent key={el.id} {...el.data} id={el.id} />
      ))}
    </div>
  );
}

export default SidebarComponent;
