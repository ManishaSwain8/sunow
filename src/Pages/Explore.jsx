import React from "react";
import "./Explore.css";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <div className="search mx-auto">
      <input className="text_bar" type="text" placeholder="Artists , songs , or podcasts"></input>

      <div className="button_search">
        <SearchIcon size={30} />
      </div>
    </div>
  );
}
