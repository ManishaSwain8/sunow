import Music from "./Music";
import React from "react";
import SearchBar from "./SearchBar";

export default function DropBox({ setShow }) {
  return (
    <div className="result">
      <SearchBar setShow={setShow} />
      <h2 className="font-bold text-2lg ml-10 mt-10">TRENDING</h2>
      <div>
        <Music />
      </div>
    </div>
  );
}
