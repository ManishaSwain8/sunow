import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Encrypt } from "./EncodeData";

export default function useAuth(code) {
  //   console.log(code);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const getAccessToken = useCallback(() => {
    axios
      .post("http://localhost:8080/api/login", { code })
      .then((res) => {
        console.log(res.data);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
        // setExpiresIn(res.data.expiresIn);
        Cookies.set("spotify_access_token", Encrypt(res.data.accessToken));
        window.location = "/";
      })
      .catch((e) => {
        console.log(e);
        window.location = "/login";
      });
  }, [code]);

  const refreshAccessToken = useCallback(() => {
    if (!refreshToken || !expiresIn) return;

    console.log("useEffect getAccessToken:");

    const interval = setInterval(() => {
      axios
        .post("http://localhost:8080/api/refresh", { refreshToken })
        .then((res) => {
          // console.log(res.data);
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
          console.log("refreshAccessToken");
        })
        .catch((e) => {
          console.log(e);
          window.location = "/login";
        });
    }, (expiresIn - 60) * 1000);

    return () => clearTimeout(interval);
  });

  useEffect(() => {
    console.log("useEffect getAccessToken:");
    getAccessToken();
  }, [code]);

  useEffect(() => {
    // refreshAccessToken();
  }, [refreshToken, expiresIn]);

  // return accessToken ? accessToken : null;
}
