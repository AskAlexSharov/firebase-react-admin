import React from "react";
import fire from "./../config/app";

import { useAuthState } from "react-firebase-hooks/auth";
import firebaseApp from "firebase/app";

const googleProvider = new firebaseApp.auth.GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
const loginByGoogle = () => fire.auth().signInWithRedirect(googleProvider);
const logout = () => fire.auth().signOut();

function Auth() {
  const [user, loading, err] = useAuthState(fire.auth());

  if (!err && !loading && !user) loginByGoogle();

  if (loading) return <div>Login...</div>;
  if (err) throw err;

  return <div />;
}

export default Auth;
