import { useState, useEffect } from "react";
import { auth, CreateUserProfileDoc } from "./Firebase/firebase.util";
import { currentUser } from "./Redux/Action/action";
import { useDispatch } from "react-redux";

import SignInAndLocinComponent from "./Components/SignInAndLoginComponent/SignInAndLocinComponent";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

function App() {
  const [CurrentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      setCurrentUser(authUser);
      CreateUserProfileDoc(authUser);
      dispatch(currentUser(authUser));
    });
  }, []);

  return (
    <div className="App">
      {CurrentUser == null ? <SignInAndLocinComponent /> : <HomePage />}

      {/* if current user send the massage the show massage right side and if the another user send the massage the show massages into the left side */}

      {/* add emogis card */}

      {/* user also change the background image */}
    </div>
  );
}

export default App;
