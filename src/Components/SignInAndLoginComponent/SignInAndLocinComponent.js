import React from "react";

import { signInWithGoogle } from "../../Firebase/firebase.util";

import "./SignInAndLoginComponent.css";

function SignInAndLocinComponent() {
  return (
    <div className="SignAndLogIn">
      <div className="SignInInnerDiv">
        <img src="/image/logo.png" />
        <button type="button" className="SignInButton" onClick={() => signInWithGoogle()}>
          Sign In with google
        </button>
      </div>
    </div>
  );
}

export default SignInAndLocinComponent;
