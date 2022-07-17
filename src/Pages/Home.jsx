import React from "react";
import Logobar from "../components/Navbar/Logobar";
import Menubar from "../components/Navbar/Menubar";
import General from "../components/Navbar/General";
import Footer from "../components/Navbar/Footer";
export default function App() {
  return (
    <div className="Navbar">
      <Menubar />
      <Logobar />
      <General />
      <Footer />
    </div>
  );
}
