import React from "react";
import image from "../../assets/images/logo.svg";
// import ToggleOnIcon from "@mui/icons-material/ToggleOn";
export default function Logobar() {
  return (
    <div>
      <header className="logobar">
        <img src={image} className="logo" alt="error"></img>
        <h2 className="logoname">
          <b>Sunow</b>
        </h2>
      </header>
      {/* <Dark_switch className="switch">
        <ToggleOnIcon />
      </Dark_switch> */}
    </div>
  );
}
