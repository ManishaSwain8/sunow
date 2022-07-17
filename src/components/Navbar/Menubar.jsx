import React from "react";
import { Menubardata } from "./Menubardata";

export default function Menubar() {
  return (
    <div>
      <div className="Menubar">
        <ul className="Menubarlist">
          <div className="menuname">
            <b>MENU</b>
          </div>
          <br />
          {Menubardata.map((val, keyz) => {
            return (
              <div key={keyz} >
                <li  className="menulist">
                  <div id="icons">{val.icons}</div>
                  <div id="titles">{val.titles}</div>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
