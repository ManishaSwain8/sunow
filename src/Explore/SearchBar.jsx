import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
export default function SearchBar({ setShow }) {
  return (
    <div>
      <input className="text_bar1" type="text" placeholder="Dive in!"></input>
      <div className="button_search1">
        <SearchIcon size={30} />
      </div>
      <button className="close1" onClick={() => setShow(false)}>
        <CloseIcon size={30} />
      </button>
    </div>
  );
}
