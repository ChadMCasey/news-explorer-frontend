import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { IsLoggedInContext } from "../../context/IsLoggedInContext";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(IsLoggedInContext);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
