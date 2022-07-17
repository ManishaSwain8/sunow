import React from "react";
// images
import image from "../../assets/images/logo.svg";
export default function Logobar() {
  return (
    <header className="logobar">
      <img src={image} className="logo" alt="error"></img>
      <h2 className="logoname">Sunow</h2>
    </header>
  );
}
