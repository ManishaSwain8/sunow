/* eslint-disable */
import React from "react";
import { useNavigate } from "react-router-dom";
import valid from "../libs/useAuth";

function generateRandomString(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const Login = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  const navigate = useNavigate();

  const onLoginHandler = () => {
    var state = generateRandomString(16);
    const client_ID = "6fd8c90cbcb24e94a3da31eb7e7d0866";
    window.location.href =
      "https://accounts.spotify.com/authorize?response_type=code&client_id=" +
      client_ID +
      "&scope=user-read-private%20user-read-email&redirect_uri=http://localhost:3000/login&state=" +
      state;
  };

  return code ? (
    valid(code)
  ) : (
    <div className="mx-auto w-fit mt-60">
      <button className="p-3 bg-green-400 text-white" onClick={() => onLoginHandler()}>
        Login with Spotify
      </button>
    </div>
  );
};

export default Login;
