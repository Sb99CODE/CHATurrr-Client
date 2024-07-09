import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ child, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;

  return child ? child : <Outlet />;
};

export default ProtectedRoute;
