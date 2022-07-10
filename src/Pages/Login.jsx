import React from "react";
import OnBording from "../components/Login/OnBording";
import LoginComponent from "../components/Login/LoginComponent";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const displayOnBording = show ? <LoginComponent /> : <OnBording show={show} setShow={setShow} />;
  return <>{displayOnBording}</>;
}
