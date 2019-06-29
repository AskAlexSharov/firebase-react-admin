import React from "react";
import "./App.css";
import fire from "./config/app";

import { useAuthState } from "react-firebase-hooks/auth";
import Data from "./views/Data";
import Auth from "./views/Auth";

function App() {
  const [user] = useAuthState(fire.auth());

  return (
    <div className="App">
      {!user && <Auth />}
      {user && (
        <div>
          {user.displayName}{" "}
          <img src={user.photoURL} width="48" height="48" alt="" />
        </div>
      )}

      <br />
      {user && <Data />}
    </div>
  );
}

export default App;
