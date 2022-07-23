import React from "react";

import { Generaldata } from "./Generaldata";
export default function General() {
  return (
    <div>
      {
        <div className="General">
          <ul className="generalist">
            <div className="gname">
              <b>MORE</b>
            </div>
            <br />
            <div className="menuflex1">
              {Generaldata.map((val, i) => {
                return (
                  <div key={i}>
                    <li className="glist">
                      <div id="icon">{val.icon}</div>
                      <div id="title">{val.title}</div>
                    </li>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      }
    </div>
  );
}
