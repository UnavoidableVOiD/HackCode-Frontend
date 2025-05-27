import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/signin";
import Signup from "./components/pages/signup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
