import React from "react";
import OnBoardingOpening from "../components/OnBoarding/OnBoardingOpening";
import OnBoardingSelection from "../components/OnBoarding/OnBoardingSelection";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState(false);
  const displayOnBording = show ? <OnBoardingSelection setShow={setShow} show={show} /> : <OnBoardingOpening show={show} setShow={setShow} />;
  return <>{displayOnBording}</>;
}
