import React from "react";
import "./App.css";
import fire from "./fire";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "firebase/app";
import Data from "./Data";

const googleProvider = new firebaseApp.auth.GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
const loginByGoogle = () => fire.auth().signInWithRedirect(googleProvider);
const logout = () => fire.auth().signOut();

function App() {
  const [user, loading, err] = useAuthState(fire.auth());

  if (!err && !loading && !user) loginByGoogle();

  if (loading) return <div>Login...</div>;
  if (err) throw err;
  console.log("user", user);

  return (
    <div className="App">
      <div>
        {user.displayName}{" "}
        <img src={user.photoURL} width="48" height="48" alt="" />
      </div>

      <br />
      {user && <Data />}
    </div>
  );
}

export default App;
