//import logo from "./assets/images/logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Library from "./Pages/Library";
import Profile from "./Pages/Profile";
import OnBoarding from "./Pages/OnBoarding";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Error from "./Pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/on-boarding" element={<OnBoarding />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
