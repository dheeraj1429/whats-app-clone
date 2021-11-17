import React from "react";
import { useSelector } from "react-redux";
import "./NavbarComponent.css";

function NavbarComponent() {
  const selector = useSelector((state) => state.user.currentUser);
  const { photoURL } = selector;

  return (
    <div className="NavbarComponent">
      <div className="Navbar__inner">
        <div className="UserProfile">
          <img className="user" src={photoURL} />
        </div>
        <div className="UserDetails">
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
          <i class="fas fa-circle"></i>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
