import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (updateItem) => {
    return updateProfile(auth.currentUser, updateItem);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  const authData = {
    register,
    updateUser,
    googleLogin,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
