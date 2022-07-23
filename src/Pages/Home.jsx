import React from "react";
import Logobar from "../components/Navbar/Logobar";
import Menubar from "../components/Navbar/Menubar";
import General from "../components/Navbar/General";
// import Footer from "../components/Navbar/Footer";
import Main from "../components/Home/Main";
import "./Home.css";
export default function Home() {
  return (
    <>
      <section className="bg-[#F4F5F7] flex">
        <div className="Navbar">
          <Menubar />
          <Logobar />
          <General />
        </div>
        <div className="w-[80%] ">
          <Main />
        </div>
      </section>
    </>
  );
}
