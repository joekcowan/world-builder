import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateRoute = ({ element: Component }) => {
  const [user] = useAuthState(auth);  // Check if the user is logged in

  return user ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;