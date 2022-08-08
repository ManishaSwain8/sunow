import React from "react";
import Logobar from "../components/Navbar/Logobar";
import Menubar from "../components/Navbar/Menubar";
import General from "../components/Navbar/General";
import Main from "../components/Home/Main";
import "./Home.css";
export default function Home() {
  return (
    <>
      <section className="bg-[#F4F5F7] flex">
        <div className="Navbar">
          <Logobar />
          <Menubar />
          <General />
        </div>
      </section>
      <div className="bg-[#F6F7FE] sm:ml-20">
        <Main />
      </div>
    </>
  );
}
