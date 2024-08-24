import React from "react";
import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/Login" />;
};

export default PrivateRoute;
