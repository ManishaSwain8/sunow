import React from "react"
import image from "../../assets/images/logo.svg";
export default function Logobar(){
    return(
    <header className="logobar">
        <img src={image} className="logo" alt="error"></img>
        <h2 className="logoname"><b>Sunow</b></h2>
        
    </header>)
}