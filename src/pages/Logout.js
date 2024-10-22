import React from "react";
// import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <Button variant="outline-danger" size="sm" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
