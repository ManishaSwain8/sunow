// import logo from "./assets/images/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Library from "./Pages/Library";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

/* <div className="App">
      <img src={logo} alt="logo" style={{ width: "100px" }} />
    </div> */
export default App;
