import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Validation from "../libs/useAuth";
// import useAuth from "../libs/validation";

const Dashboard = ({ code }) => {
  const asscesToken = Validation(code);
  return asscesToken;
};

export default Dashboard;
