import React from "react";
// import Logobar from "../components/Navbar/Logobar";
// import Menubar from "../components/Navbar/Menubar";
// import General from "../components/Navbar/General";
// import Footer from "../components/Navbar/Footer";
import Main from "../components/Home/Main";
// import TopNavbar from "../components/Home/TopNavbar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <section className="container ml-auto">
        {/* <div className="Navbar">
          <Menubar />
          <Logobar />
          <General />
          <Footer />
        </div> */}

        <Main />
      </section>
    </>
  );
}
