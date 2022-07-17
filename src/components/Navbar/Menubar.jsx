import React from "react"

import {Menubardata}  from './Menubardata'
export default function Menubar(){
    return(
        <div>

                <div className="Menubar"> 
                
                <ul className="Menubarlist">
                <div className="menuname"><b>MENU</b></div><br/>
                        {Menubardata.map ((val,key)=>{
                        return(
                                
                                
                                <div>
                                <li key={key} className="menulist">
                                <div id="icon">{val.icon}</div>
                                <div id="title">{val.title}</div>
                                </li></div>
                        );
                        }
                        )}
                </ul></div></div>
                );
                }