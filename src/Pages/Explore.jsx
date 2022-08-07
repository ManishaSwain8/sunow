// import React from "react";

// export default function Explore() {
//   return <div>Explore</div>;
// }
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <div className="search">
      <input
        className="text_bar"
        type="text"
        placeholder="Artists , songs , or podcasts"
      ></input>
      <button className="button_search">
        <SearchIcon />
      </button>
    </div>
  );
}
