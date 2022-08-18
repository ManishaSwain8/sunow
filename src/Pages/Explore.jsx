import React, { useState } from "react";
import "./Explore.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import DropBox from "../Explore/DropBox";

export default function Search() {
  const [show, setShow] = useState(false);

  return (
    <div className="search mx-auto">
      <input
        onClick={() => setShow(true)}
        className="text_bar"
        type="text"
        placeholder="Dive in!"
      ></input>

      <div className="button_search">
        <SearchIcon size={30} />
      </div>
      <button className="close">
        <CloseIcon size={30} />
      </button>
      {show && (
        <button>
          <DropBox setShow={setShow} />
        </button>
      )}

      {/* {show && (
        <div className="result">
          <input
            className="text_bar1"
            type="text"
            placeholder="Dive in!"
          ></input>
          <div className="button_search1">
            <SearchIcon size={30} />
          </div>
          <button className="close1" onClick={() => setShow(false)}>
            <CloseIcon size={30} />
          </button>
          <h2 className="font-bold text-2lg ml-10 mt-10">TRENDING</h2>
          <div>
            <Top50Box />
            <Top50Box />
            <Top50Box />
            <Top50Box />
            <Top50Box />
            <Top50Box />
          </div>
        </div>
      )} */}
    </div>
  );
}
// const Top50Box = () => {
//   return (
//     <div className=" hover:shadow  inline-block ml-9 mt-6 space-x-5 ">
//       <div>
//         <img
//           src="http://filmmusicreporter.com/wp-content/uploads/2018/05/mosaic.jpg"
//           alt="albumImage"
//           className="rounded-md w-12"
//         />
//         <h2>Mosaic Cool </h2>
//         <h3>Engineering karke galti kar die</h3>
//       </div>
//     </div>
//   );
// };
