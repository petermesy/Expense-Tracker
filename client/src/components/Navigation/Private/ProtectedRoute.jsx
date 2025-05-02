import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element }) => {
  const userLogin = useSelector((state) => state?.users?.userAuth);
  const location = useLocation(); // Get the current location

  // If the user is logged in, render the component; otherwise, redirect to login
  return userLogin ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;