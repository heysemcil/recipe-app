import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import { GlobalStyles } from "../components/globalStyles/Global.styles";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/detail/Detail";
import Register from "../pages/register/register";
import { LoginContext } from "../context/LoginContext";
import { useState } from "react";

const AppRouter = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  return (
    <LoginContext.Provider value={{user,setUser}}>
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>

        <Route path="detail" element={<PrivateRouter />}>
          <Route path="" element={<Detail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </LoginContext.Provider>
  );
};

export default AppRouter;
