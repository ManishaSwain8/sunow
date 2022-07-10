import React from "react";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

const openID = [
  { name: "Facebook", icon: <BsFacebook color="#4267B2" size={42} /> },
  { name: "Google", icon: <FcGoogle size={42} /> },
  { name: "Apple", icon: <AiFillApple size={42} /> },
];

const OnBoardingSelection = ({ setShow, show }) => {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate("/login");
  const loginButton = openID.map((item, index) => <LoginButton item={item} key={index} />);
  return (
    <>
      <button className="" onClick={() => setShow(!show)}>
        <BsArrowLeft size={42} className="text-left" />
      </button>
      <div className="text-center mx-8 space-y-10">
        <h1>Let's you in</h1>
        <div className="space-y-3">{loginButton}</div>
        <div>
          <button onClick={navigateToLogin} className="flex bg-green-500 rounded-3xl justify-center items-center border-2 px-8 py-4 w-full text-white">
            Sign in with Password
          </button>
        </div>

        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
};

const LoginButton = ({ item }) => (
  <button className="flex justify-center items-center border-2 rounded-lg px-8 py-2 w-full">
    <span className="px-4">{item.icon}</span>
    Continue with {item.name}
  </button>
);
export default OnBoardingSelection;
