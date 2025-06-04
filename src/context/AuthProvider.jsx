import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authData = {
    register,
    updateUser,
    googleLogin,
    login,
    user,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
