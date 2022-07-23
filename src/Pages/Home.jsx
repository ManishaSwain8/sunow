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
      <section className="bg-[#F4F5F7] h-[100vh] flex">
        <div className="Navbar z-10">
          <Menubar />
          <Logobar />
          <General />
        </div>
        <div className="w-[80%] sm:ml-auto mx-auto">
          <Main />
        </div>
      </section>
    </>
  );
}
