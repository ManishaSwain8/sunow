import React from "react";
import Logobar from "../components/Navbar/Logobar";
import Menubar from "../components/Navbar/Menubar";
import General from "../components/Navbar/General";
import Footer from "../components/Navbar/Footer";
import Main from "../components/Home/Main";
// import TopNavbar from "../components/Home/TopNavbar";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="Navbar">
        <Menubar />
        <Logobar />
        <General />
        <Footer />
      </div>
      <section className="bg-[#F6F7FE] ml-20">
        <Main />
      </section>
    </>
  );
}
