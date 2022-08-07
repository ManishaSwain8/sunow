import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Logobar from "../components/Navbar/Logobar";
import Menubar from "../components/Navbar/Menubar";
import General from "../components/Navbar/General";
import Main from "../components/Home/Main";
import Search from "../components/Navbar/Search";
import Explore from "../Pages/Explore";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <section className="bg-[#F4F5F7] flex">
        <div className="Navbar">
          <Menubar />
          <Logobar />
          <General />
        </div>
      </section>
      <div className="bg-[#F6F7FE] sm:ml-20">
        <Main />
      </div>
    </>
  );
}
