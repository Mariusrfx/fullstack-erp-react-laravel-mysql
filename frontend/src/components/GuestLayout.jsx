import React from "react";
import { Outlet,Navigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

function GuestLayout() {
  const { user, token } = useStateContext();
    //if the token does exist user is able to enter protected routes

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div id="guestLayout">
      <Outlet />
    </div>
  );
}

export default GuestLayout;
