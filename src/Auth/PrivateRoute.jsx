// import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "./AuthContext"; // Assuming you have an AuthProvider

// const PrivateRoute = () => {
//   const { isAuthenticated } = useAuth();

//   return isAuthenticated ? <Outlet /> : <Navigate to="/admin/login" />;
// };

// export default PrivateRoute;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// This is a dummy authentication function, replace it with your actual authentication logic
const isAuthenticated = () => {
  const tokenData = JSON.parse(localStorage.getItem("token"));

  if (tokenData) {
    const { expiration } = tokenData;

    // Check if the current time is before the expiration time
    if (Date.now() < expiration) {
      return true;
    } else {
      // Token has expired, remove it from localStorage
      localStorage.removeItem("token");
      return false;
    }
  }

  return false;
};

const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/admin" />;
};

export default PrivateRoute;
