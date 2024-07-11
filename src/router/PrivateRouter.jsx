import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  const { user } = useContext(LoginContext);

  return user.username ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
