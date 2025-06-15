import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loader, user } = useContext(AuthContext);
  if (!loader) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
