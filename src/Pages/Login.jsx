import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { AiOutlineMail } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

import { AiFillHome } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { AiFillApple } from "react-icons/ai";

const openID = [
  { name: "Facebook", icon: <BsFacebook color="#4267B2" size={42} /> },
  { name: "Google", icon: <FcGoogle size={42} /> },
  { name: "Apple", icon: <AiFillApple size={42} /> },
];

const LoginButton = ({ item }) => (
  <button className="p-3 px-6 border-2 rounded">
    <span>{item.icon}</span>
  </button>
);

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState("password");
  const email_icon = <AiOutlineMail />;
  const password_icon = <AiFillLock />;

  const eye_invisible = <AiFillEyeInvisible />;
  const eye_visible = <AiFillEye />;

  const navigate = useNavigate();

  const navigateTo = () => navigate("/");

  const isPasswordVisible = () => {
    setPasswordVisible(passwordVisible === "password" ? "text" : "password");
    setVisible(!visible);
  };

  const loginButton = openID.map((item, index) => <LoginButton item={item} key={index} />);
  return (
    <div className="text-center max-w-lg mx-auto mt-32 ">
      <AiFillHome />
      <div className="space-y-10 border rounded m-3 p-6">
        <h1>Login your Account</h1>
        <form onSubmit={(e) => e.preventDefault()} method="post" className="space-y-5">
          <div className="relative">
            <span className="absolute top-4 left-4">{email_icon}</span>
            <input className="w-full px-9 py-3 bg-gray-100" type="email" placeholder="Email" />
          </div>
          <div className="relative">
            <span className="absolute top-4 left-4">{password_icon}</span>
            <input className="w-full px-9 py-3 bg-gray-100" type={passwordVisible} placeholder="Password" />
            <button onClick={isPasswordVisible} className="absolute right-4 top-4">
              {!visible ? <>{eye_invisible}</> : <>{eye_visible}</>}
            </button>
          </div>
          <div>
            <button onClick={navigateTo} type="submit" className="flex bg-green-500 rounded-3xl justify-center items-center px-8 py-4 w-full text-white">
              Sign in
            </button>
            <span className="text-blue-500">Forgot the Password?</span>
          </div>
        </form>

        <div className="flex justify-around">{loginButton}</div>
      </div>
    </div>
  );
};

export default Login;
