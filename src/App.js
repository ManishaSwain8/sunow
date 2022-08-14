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
import PrivateRoutes from "./libs/PrivateRoutes.js";
// import { Cookie } from "@mui/icons-material";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<PrivateRoutes Component={Home} />} /> */}
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/on-boarding" element={<OnBoarding />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
