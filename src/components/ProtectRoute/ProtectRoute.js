import React,{useContext,useEffect,useState} from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "context/UserContext";
// import { useEffect } from "react";


const ProtectedRoute = ({
  children,
  adminRoute,
  redirect = "/login",
  redirectAdmin = "/adminLogin",
}) => {
  const { isLoggedIn,profile} = useContext(UserContext);
  let isAdmin=false;
  console.log("Profile inside Protect Route",profile);
  isAdmin = profile.type==="Admin" ? true :false
  if (!isLoggedIn) {
    return <Navigate to={redirect} />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={redirectAdmin} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;