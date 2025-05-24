import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./components/pages/signin";
import Signup from "./components/pages/signup";
import Home from "./components/pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth/login" element={<SignIn />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
