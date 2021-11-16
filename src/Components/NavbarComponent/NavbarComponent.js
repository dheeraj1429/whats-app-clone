import React from "react";

import "./NavbarComponent.css";

function NavbarComponent() {
  return (
    <div className="NavbarComponent">
      <div className="Navbar__inner">
        <div className="UserProfile">
          <img
            className="user"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          />
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
