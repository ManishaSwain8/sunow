import React from "react"

import {Generaldata}  from './Generaldata'
export default function General(){
    return(
        <div>
    <div className="General"> 
                
    <ul className="generalist">
    <div className="gname"><b>GENERAL</b></div><br/>
            {Generaldata.map ((val,key)=>{
            return(
                    
                    
                    <div>
                    <li key={key} className="glist">
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    </li></div>
            );
            }
            )}
    </ul></div></div>



)};