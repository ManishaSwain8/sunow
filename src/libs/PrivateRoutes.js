import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const [isToken, setIsToken] = useState(true);
  useEffect(() => {
    if (Cookies.get("spotify_access_token") === undefined) {
      console.log("PrivateRoutes");
      setIsToken(false);
    }
  }, []);

  return isToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
